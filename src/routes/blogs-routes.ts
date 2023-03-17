
import { Request, Response, Router} from "express";
import {blogDataRepositories} from "../DataLayer-bd-local/BLOGrepo";
import {errorsMiddleware} from "../middleWares/errors_Middleware";
import {authMiddleWare} from "../middleWares/auth.middleware";
import {checkDescription, checkName, checkUrl} from "../middleWares/Blog_validator";
export const blogsRoutes = Router({})


//routes
blogsRoutes.get('/',(req:Request,res:Response)=>{
    res.send(blogDataRepositories.readAllBlog())
})
//post
blogsRoutes.post('/',
    authMiddleWare,
    checkName,
    checkDescription,
    checkUrl,
    errorsMiddleware,
    (req:Request,res:Response) =>{
    const newBlog = blogDataRepositories.createNewBlog(req.body.name,req.body.description, req.body.websiteUrl)
        res.status(201).send(newBlog)



})
//get by id
blogsRoutes.get('/:id',(req:Request,res:Response) =>{
    let answer = blogDataRepositories.readBlogById(req.params.id.toString())
    if(!answer){
        res.sendStatus(404)
    } res.send(answer)
})



//put
blogsRoutes.put('/:id',
    authMiddleWare,
    checkName,
    checkDescription,
    checkUrl,
    errorsMiddleware,
    (req:Request,res:Response) =>{
      if(blogDataRepositories.updateBlog(req.params.id,req.body.name,req.body.description,req.body.websiteUrl)) {
          res.send(204)
      } else {
          res.send(404)
      }
    })





//delete by id
blogsRoutes.delete('/:id',authMiddleWare,(req:Request,res:Response) =>{
    blogDataRepositories.removeBlogById(req.params.id.toString()) ? res.send(204):res.send(404)
})
//


