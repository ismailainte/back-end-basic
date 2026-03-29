import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [];
const posts = [];
const comments = [];

let userId = 1;
let postId = 1;
let commentId = 1;

const sendSuccess = (res, statusCode, message, data = {}) => {
    return res.status(statusCode).json({
        status: 'success',
        statusCode,
        message,
        ...data
    });
};

const sendError = (res, statusCode, message) => {
    return res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        statusCode: 200,
        message: 'Basic back-end assignment API is running'
    });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return sendError(res, 400, 'name and email are required');
    }

    const newUser = {
        id: userId++,
        name,
        email
    };

    users.push(newUser);
    return sendSuccess(res, 201, 'User added successfully', { user: newUser });
});

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);

    if (!user) {
        return sendError(res, 404, 'User not found');
    }

    const { name, email } = req.body;

    if (name !== undefined) {
        user.name = name;
    }

    if (email !== undefined) {
        user.email = email;
    }

    return sendSuccess(res, 200, 'User updated successfully', { user });
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        return sendError(res, 404, 'User not found');
    }

    const deletedUser = users.splice(index, 1)[0];
    return sendSuccess(res, 200, 'User deleted successfully', { user: deletedUser });
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return sendError(res, 400, 'title and content are required');
    }

    const newPost = {
        id: postId++,
        title,
        content
    };

    posts.push(newPost);
    return sendSuccess(res, 201, 'Post added successfully', { post: newPost });
});

app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((item) => item.id === id);

    if (!post) {
        return sendError(res, 404, 'Post not found');
    }

    const { title, content } = req.body;

    if (title !== undefined) {
        post.title = title;
    }

    if (content !== undefined) {
        post.content = content;
    }

    return sendSuccess(res, 200, 'Post updated successfully', { post });
});

app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex((item) => item.id === id);

    if (index === -1) {
        return sendError(res, 404, 'Post not found');
    }

    const deletedPost = posts.splice(index, 1)[0];
    return sendSuccess(res, 200, 'Post deleted successfully', { post: deletedPost });
});

app.post('/comments', (req, res) => {
    const { postId, text } = req.body;

    if (!postId || !text) {
        return sendError(res, 400, 'postId and text are required');
    }

    const newComment = {
        id: commentId++,
        postId,
        text
    };

    comments.push(newComment);
    return sendSuccess(res, 201, 'Comment added successfully', { comment: newComment });
});

app.put('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find((item) => item.id === id);

    if (!comment) {
        return sendError(res, 404, 'Comment not found');
    }

    const { postId, text } = req.body;

    if (postId !== undefined) {
        comment.postId = postId;
    }

    if (text !== undefined) {
        comment.text = text;
    }

    return sendSuccess(res, 200, 'Comment updated successfully', { comment });
});

app.delete('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = comments.findIndex((item) => item.id === id);

    if (index === -1) {
        return sendError(res, 404, 'Comment not found');
    }

    const deletedComment = comments.splice(index, 1)[0];
    return sendSuccess(res, 200, 'Comment deleted successfully', { comment: deletedComment });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
