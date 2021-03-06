const axios = require('axios');

const publish = async (type, data) => {
    const busUrl = 'http://event-bus-srv:4005/events';
    return await axios.post(busUrl, {
        type,
        data
    })
}

module.exports = publish;