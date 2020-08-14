const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const postsComments = []

app.get('/posts-comments', (req, res) => {
    res.send(postsComments);
})

app.post('/events', (req, res) => {
    const event = req.body;

    if (event.type === 'PostCreated') {
        const { id, title, createdAt } = event.data;
        postsComments.unshift({
            id,
            title,
            createdAt,
            comments: []
        })
    } 

    if (event.type === 'CommentCreated') {
        const { id, postId, content, createdAt } = event.data;
        const post = postsComments.find(p => p.id === postId);
        post.comments.unshift({
            id,
            content,
            createdAt
        })
    }
    
    res.send({})

})


app.listen(4002, () => {
    console.log('Listening on port 4002');
})