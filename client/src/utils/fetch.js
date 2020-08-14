import axios from 'axios';

const fetch = async (method, url, data) => {
    const response = { data: "", errors: "", loading: true }
    try {
        const rs = await axios({method, url, data});
        response.data = rs.data;
        response.loading = false;
    } catch (err) {
        console.error(err)
        response.errors = err;
        response.loading = false;
    } 
    return response;
}

export default fetch