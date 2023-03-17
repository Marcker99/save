//db-posts
import {Request, Response, Router} from "express";
import {authMiddleWare} from "../middleWares/auth.middleware";
import {postDataRepositories, postDb} from "../DataLayer-bd-local/POSTrepo";
import {checkBlogId, checkContent, checkShortDescription, checkTitle} from "../middleWares/Post_valiators";
import {errorsMiddleware} from "../middleWares/errors_Middleware";
import {blogDB} from "../DataLayer-bd-local/BLOGrepo";


export const postRoutes = Router({})
//routes
postRoutes.get('/',(req:Request,res:Response)=>{
    res.send(postDataRepositories.readAllPost())
})
//post
postRoutes.post('/',
    authMiddleWare,
    checkTitle,
    checkShortDescription,
    checkContent,
    checkBlogId,
    errorsMiddleware,(req:Request,res:Response) =>{
      const newPost = postDataRepositories.createNewPost(req.body.title,req.body.shortDescription,
       req.body.content,req.body.blogId)
        res.status(201).send(newPost)


    })

//get by id
postRoutes.get('/:id',(req:Request,res:Response)=>{
    let answer = postDataRepositories.readPostById(req.params.id)
    if(!answer){
        res.sendStatus(404)
    } res.send(answer)

})

//put
postRoutes.put('/:id',
    authMiddleWare,
    checkTitle,
    checkShortDescription,
    checkContent,
    checkBlogId,
    errorsMiddleware,(req:Request,res:Response) =>{
    if(postDataRepositories.updatePost(req.params.id,req.body.title,req.body.shortDescription,
       req.body.content,req.body.blogId)) {
          res.send(204)
      } else {
          res.send(404)
      }


    })
//delete by id


postRoutes.delete('/:id',authMiddleWare,(req:Request,res:Response) =>{
    postDataRepositories.removePostById(req.params.id)? res.send(204):res.send(404)
})
//

postRoutes.delete('/all-data',(req:Request,res:Response) => {
    postDataRepositories.clearAll()
    res.sendStatus(204)
})

