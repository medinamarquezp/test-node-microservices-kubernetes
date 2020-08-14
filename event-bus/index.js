const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

const events = []

app.post('/events', async (req, res) => {
    const event = req.body;
    await axios.post('http://posts-clusterip-srv:4000/events', event);
    await axios.post('http://comments-srv:4001/events', event);
    await axios.post('http://query-srv:4002/events', event);
    events.push(event);
    console.log(events);
    res.send({})
})

app.listen(4005, () => {
    console.log('Listening on port 4005')
})
