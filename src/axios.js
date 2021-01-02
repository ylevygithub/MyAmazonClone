/**
 * axios is a very popular fetching library
 * so we can fetch, post request,...
 * allows us to interract with apis very easily
 */
import axios from 'axios'

const instance = axios.create({
    //at this point we dont have any api
    baseURL: 'https://us-central1-clone-76ac3.cloudfunctions.net/api'
    // THE API (cloud function) URL
})

export default instance;
// localhost for debugging :
// http://localhost:5001/clone-76ac3/us-central1/api
