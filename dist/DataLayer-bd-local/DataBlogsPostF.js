"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = exports.blogHandler = void 0;
//BlogLocalDataBase
let blogDB = [
    {
        id: "1",
        name: "some name",
        description: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqmfmtfmfhmhfmfmhmfmfmmtmftytbisjhisejhiojsihojsiohjr",
        websiteUrl: "https://qEb-W8yZ5QznRLeZ0DkBM-phFGh7HxbsshrsMEa7KZlh155.CZxjs6gficymZT2SqacgsgfsgYhXePRDqD5SECSMLu"
    }
];
//handler blog
exports.blogHandler = {
    readAll() {
        return blogDB;
    },
    readById() { }
};
//PostLocalDataBase
let postDb = [
    {
        id: "243",
        title: "test post",
        shortDescription: "id 1 ,name: some name",
        content: "short video",
        blogId: "1",
        blogName: "some name"
    }
];
//handler post
exports.postHandler = {
    readAll() {
        return postDb;
    },
    readById(param) {
        const answer = postDb.find(n => n.id === param);
        return answer;
    }
};
