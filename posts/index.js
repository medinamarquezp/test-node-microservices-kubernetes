const uid = require('uid');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const publish = require('./publishEvent');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = [];

app.post('/posts', async (req, res) => {
    const { title } = req.body;
    const newPost = {id: uid(6) ,title, createdAt: Date.now()};
    posts.push(newPost);
    await publish('PostCreated', newPost);
    res.send({ status: 'OK', data: newPost });
});

app.post('/events', (req, res) => {
    const event = req.body;
    console.log(`Event received correctly: ${event.type}`);
    res.send({});
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})
