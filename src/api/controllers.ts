import { Request, Response } from 'express';
import writeServiceInstance from '../services/writeService';
import readServiceInstance from '../services/readService';
import postServiceInstance from '../services/postService'

let posts: Array<object> = [
    {
        blogId: 1,
        title: 'some title',
        body: 'some body'
    },
    {
        blogId: 2,
        title: 'some titl-2',
        body: 'some body-2'
    },
    {
        blogId: 3,
        title: 'some title-3',
        body: 'some body-3'
    }
]

export const read = (req: Request, res: Response) => {
    readServiceInstance.read();
    res.sendStatus(200)
}

export const write = (req: Request, res: Response) => {
    writeServiceInstance.write();
    res.sendStatus(200);
} 

export const getPosts = (req: Request, res: Response) => {
    res.send(posts);
}

export const getPost = (req: Request, res: Response) => {
    const { id } = req.params;

    const post = postServiceInstance.getPost(id, posts);

    if (post) {
        res.send(post);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

export const createPost = (req: Request, res: Response) => {
    const { title, body } = req.body;

    posts.push(postServiceInstance.createPost(title, body));
    res.sendStatus(201);
}

export const updatePost = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, body } = req.body;

    const post = postServiceInstance.updatePost(id, posts, title, body );
    post ? res.sendStatus(200) : res.sendStatus(404);
}

export const deletePost = (req: Request, res: Response) => {
    const { id } = req.params;

    posts = postServiceInstance.deletePost(id, posts);
    res.sendStatus(200);
}