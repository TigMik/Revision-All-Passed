import express from "express";
import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    updatePost,
} from "../api/controllers";

const routerPost = express.Router();

routerPost.get("/", getPosts);

routerPost.get("/:id", getPost);

routerPost.post("/", createPost);

routerPost.patch("/:id", updatePost);

routerPost.delete("/:id", deletePost);

export default routerPost;
