import axios from 'axios';

const ROOT_URL = "https://api.teleport.org/api/cities/?search";

const ADD_DATA = 'ADD_DATA';

export function addData(city){
    const url = `${ROOT_URL}=${city}`;
    console.log("url" + url)
    const request = axios.get(url);
    console.log("request" + request)
    return {
	    type: ADD_DATA,
	    payload: request
    };
}

