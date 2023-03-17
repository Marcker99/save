import express from "express";
import {body_parser} from "./middleWares/gen.middlewares";
import {blogsRoutes} from "./routes/blogs-routes";
import {postRoutes} from "./routes/post-routes";
export const app = express()


app.use(body_parser)

app.use('/blogs',blogsRoutes)

app.use('/posts',postRoutes)