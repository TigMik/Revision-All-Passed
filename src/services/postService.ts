class PostService {
    getPost(id: string, posts: any[]) {
        return posts.find((post: { blogId: number; }) => post.blogId === Number(id)); 
    }

    createPost(title: string, body: string) {
        return {
            blogId: Date.now(),
            title,
            body
        }
    }

    updatePost(id: string, posts: any[], title: string, body: string) {
        const post = posts.find((post: { blogId: number; }) => post.blogId === Number(id));
        if (post) {
            post.title = title;
            post.body = body;
            return post;
        } else {
            return null;
        }
    }
    
    deletePost(id: string, posts: any[]) {
        return posts.filter((post: { blogId: number; }) => post.blogId !== Number(id));
    }  
}

export default new PostService();