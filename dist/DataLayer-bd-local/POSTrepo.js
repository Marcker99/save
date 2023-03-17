"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDataRepositories = exports.postDb = void 0;
const BLOGrepo_1 = require("./BLOGrepo");
exports.postDb = [
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
];
exports.postDataRepositories = {
    readPostById(param) {
        const foundObject = exports.postDb.find(obj => obj.id === param); //make find By id
        return foundObject || null;
    },
    readAllPost() {
        return exports.postDb;
    },
    removePostById(param) {
        for (let i = 0; i < exports.postDb.length; i++) {
            if (exports.postDb[i].id === param) {
                exports.postDb.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    createNewPost(title, shortDescription, content, blogId) {
        //?
        const findBlogName = BLOGrepo_1.blogDB.find(el => el.id === blogId);
        let blogName;
        if (!findBlogName) {
            blogName = "not fined";
        }
        else {
            blogName = findBlogName.name;
        }
        //?
        const newPost = {
            id: Math.floor((Math.random() * 1000)).toString(),
            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: blogId,
            blogName: blogName
        };
        exports.postDb.push(newPost);
        return newPost;
    },
    updatePost(id, title, shortDescription, content, blogId) {
        const findId = exports.postDb.find(obj => obj.id.toString() === id);
        if (!findId) {
            return false;
        }
        else {
            findId.title = title;
            findId.shortDescription = shortDescription;
            findId.content = content;
            findId.blogId = blogId;
            return true;
        }
    }
};
