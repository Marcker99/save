"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogDataRepositories = exports.blogDB = void 0;
exports.blogDB = [
    {
        id: "1",
        name: "some name",
        description: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqmfmtfmfhmhfmfmhmfmfmmtmftytbisjhisejhiojsihojsiohjr",
        websiteUrl: "https://qEb-W8yZ5QznRLeZ0DkBM-phFGh7HxbsshrsMEa7KZlh155.CZxjs6gficymZT2SqacgsgfsgYhXePRDqD5SECSMLu"
    },
    {
        id: "2",
        name: "another name",
        description: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqmfmtfmfhmhfmfmhmfmfmmtmftytbisjhisejhiojsihojsiohjr",
        websiteUrl: "https://qEb-W8yV5QznRLeZ0DkBM-phFGh7HxbsshrsMEa67Zlh155.CZxjs6gficymZT2SqacghXePRDqD5SECSMLu"
    }
];
exports.blogDataRepositories = {
    readBlogById(param) {
        const foundObject = exports.blogDB.find(obj => obj.id === param); //make find By id
        return foundObject || null;
    },
    readAllBlog() {
        return exports.blogDB;
    },
    removeBlogById(param) {
        for (let i = 0; i < exports.blogDB.length; i++) {
            if (exports.blogDB[i].id === param) {
                exports.blogDB.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    createNewBlog(name, description, webUrl) {
        const newBlog = {
            id: Math.floor((Math.random() * 1000)).toString(),
            name: name,
            description: description,
            websiteUrl: webUrl
        };
        exports.blogDB.push(newBlog);
        return newBlog;
    },
    updateBlog(id, name, description, webUrl) {
        const findId = exports.blogDB.find(obj => obj.id.toString() === id);
        if (!findId) {
            return false;
        }
        else {
            findId.name = name;
            findId.description = description;
            findId.websiteUrl = webUrl;
            return true;
        }
    }
};
