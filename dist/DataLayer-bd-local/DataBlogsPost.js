"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataHandler = void 0;
//BlogLocalDataBase
let blogDB = [
    {
        id: "1",
        name: "some name",
        description: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqmfmtfmfhmhfmfmhmfmfmmtmftytbisjhisejhiojsihojsiohjr",
        websiteUrl: "https://qEb-W8yZ5QznRLeZ0DkBM-phFGh7HxbsshrsMEa7KZlh155.CZxjs6gficymZT2SqacgsgfsgYhXePRDqD5SECSMLu"
    }
];
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
exports.dataHandler = {
    readAll(param) {
        return param;
    },
    readById(param) {
        const answer = postDb.find(n => n.id === param);
        return answer;
    }
};
