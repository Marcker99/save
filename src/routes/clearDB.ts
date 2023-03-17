import {Request, Response, Router} from "express";
import {postDataRepositories} from "../DataLayer-bd-local/POSTrepo";
import {blogDataRepositories} from "../DataLayer-bd-local/BLOGrepo";

export const clearRout = Router({})

clearRout.delete('/all-data',(req:Request,res:Response) => {
    blogDataRepositories.clearAll()
    postDataRepositories.clearAll()
    res.sendStatus(204)
})


