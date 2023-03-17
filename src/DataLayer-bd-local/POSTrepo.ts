import {blogDB} from "./BLOGrepo";


interface postObj{
    id:string;
    title:string;
    shortDescription:string;
    content:string;
    blogId:string;
    blogName:string;

}
export let postDb: postObj[] = [
    {
        id: "243",
        title: "test post",
        shortDescription: "id 1 ,name: some name",
        content: "short video",
        blogId: "1",
        blogName: "some name"
    },
    {
        id: "985",
        title: "second post",
        shortDescription: "id 2 ,name: another name",
        content: "short video",
        blogId: "2",
        blogName: "another name"
    }
]

export const postDataRepositories = {


    readPostById(param: string | null | undefined) {
        const foundObject = postDb.find(obj => obj.id === param);//make find By id
        return foundObject || null;
    },
    readAllPost() {
        return postDb
    },
    removePostById(param: string ): boolean {
        for (let i = 0; i < postDb.length; i++) {
            if (postDb[i].id === param) {
                postDb.splice(i, 1)
                return true

            }
        }
        return false
    },
    createNewPost(title:string,shortDescription:string,content:string,blogId:string):postObj{
        //?
            const findBlogName = blogDB.find(el => el.id === blogId)
            let blogName:string
            if(!findBlogName){
                blogName = "not fined"
            } else {
                blogName = findBlogName.name
            }
       //?
            const newPost:postObj = {
            id: Math.floor((Math.random() * 1000)).toString(),
            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: blogId,
            blogName: blogName
        }
            postDb.push(newPost)
            return newPost
        },
    updatePost(id:string,title:string,shortDescription:string,content:string,blogId:string):boolean{
         const findId = postDb.find(obj => obj.id.toString() === id)
         if(!findId){
             return false
         }
         else {
             findId.title = title
             findId.shortDescription = shortDescription
             findId.content = content
             findId.blogId = blogId
             return true
         }
     }









}