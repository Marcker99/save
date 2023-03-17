import {NextFunction,Request,Response} from 'express'
import {validationResult} from "express-validator";

export const errorsMiddleware = (req:Request,res: Response, next:NextFunction)=>{
    const errors = validationResult(req)
    const errorsMessages = []
    if(!errors.isEmpty()) {
        const errArr = errors.array()
        for (let i = 0; i < errArr.length; i++) {
            const error = errArr[i];
            errorsMessages.push({
                ...error.msg
            });
        }
  ;

        res.status(400).json({errorsMessages})
    } else {
        next()
    }

}
