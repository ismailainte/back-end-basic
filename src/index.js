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

app.get('/', (req, res) => {
    res.send('Simple API is running');
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'name and email are required' });
    }

    const newUser = {
        id: userId++,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json({ message: 'User added successfully', user: newUser });
});

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { name, email } = req.body;

    if (name !== undefined) {
        user.name = name;
    }

    if (email !== undefined) {
        user.email = email;
    }

    res.json({ message: 'User updated successfully', user });
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: 'User deleted successfully', user: deletedUser });
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'title and content are required' });
    }

    const newPost = {
        id: postId++,
        title,
        content
    };

    posts.push(newPost);
    res.status(201).json({ message: 'Post added successfully', post: newPost });
});

app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((item) => item.id === id);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    const { title, content } = req.body;

    if (title !== undefined) {
        post.title = title;
    }

    if (content !== undefined) {
        post.content = content;
    }

    res.json({ message: 'Post updated successfully', post });
});

app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    const deletedPost = posts.splice(index, 1)[0];
    res.json({ message: 'Post deleted successfully', post: deletedPost });
});

app.post('/comments', (req, res) => {
    const { postId, text } = req.body;

    if (!postId || !text) {
        return res.status(400).json({ message: 'postId and text are required' });
    }

    const newComment = {
        id: commentId++,
        postId,
        text
    };

    comments.push(newComment);
    res.status(201).json({ message: 'Comment added successfully', comment: newComment });
});

app.put('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find((item) => item.id === id);

    if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
    }

    const { postId, text } = req.body;

    if (postId !== undefined) {
        comment.postId = postId;
    }

    if (text !== undefined) {
        comment.text = text;
    }

    res.json({ message: 'Comment updated successfully', comment });
});

app.delete('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = comments.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Comment not found' });
    }

    const deletedComment = comments.splice(index, 1)[0];
    res.json({ message: 'Comment deleted successfully', comment: deletedComment });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
