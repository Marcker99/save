
import { Request, Response, Router} from "express";
import {blogDataRepositories} from "../repositoriesDataLayer/DB_BLOGrepo";
import {errorsMiddleware} from "../middleWares/errors_Middleware";
import {authMiddleWare} from "../middleWares/auth.middleware";
import {checkDescription, checkName, checkUrl} from "../middleWares/validators/Blog_validator";
export const blogsRoutes = Router({})


//routes
blogsRoutes.get('/',async (req: Request, res: Response) => {
    const answer = await blogDataRepositories.readAllBlog()
    res.send(answer)
})
//post
blogsRoutes.post('/',
    authMiddleWare,
    checkName,
    checkDescription,
    checkUrl,
    errorsMiddleware,
    async (req: Request, res: Response) => {
        const newBlog = await blogDataRepositories.createNewBlog(req.body.name, req.body.description, req.body.websiteUrl)
        res.status(201).send(newBlog)


    })
//get by id
blogsRoutes.get('/:id',async (req: Request, res: Response) => {
    let answer = await blogDataRepositories.readBlogById(req.params.id.toString())
    if (!answer) {
        res.sendStatus(404)
    }
    res.send(answer)
})



//put
blogsRoutes.put('/:id',
    authMiddleWare,
    checkName,
    checkDescription,
    checkUrl,
    errorsMiddleware,
    async (req: Request, res: Response) => {
        const answer = await blogDataRepositories.updateBlog(req.params.id, req.body.name,
            req.body.description, req.body.websiteUrl)
        if (answer) {
            res.send(204)
        } else {
            res.send(404)
        }
    })





//delete by id
blogsRoutes.delete('/:id',authMiddleWare, async (req: Request, res: Response) => {
    const answer = await blogDataRepositories.removeBlogById(req.params.id.toString()) //toString?
    answer ? res.send(204) : res.send(404)
})
//


