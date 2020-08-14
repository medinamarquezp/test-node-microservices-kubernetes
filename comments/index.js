const uid = require('uid');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const publish = require('./publishEvent');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const comments = [];

app.post('/comments', async (req, res) => {
    const { postId, content } = req.body;
    const newComment = {id: uid(6), postId, content, createdAt: Date.now()};
    comments.push(newComment);
    await publish('CommentCreated', newComment);
    res.send({ status: 'OK', data: newComment });
});

app.post('/events', (req, res) => {
    const event = req.body;
    console.log(`Event received correctly: ${event.type}`);
    res.send({});
})

app.listen(4001, () => {
    console.log('Listening on port 4001')
})
