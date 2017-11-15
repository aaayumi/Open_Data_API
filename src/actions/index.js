import axios from "axios";

const ROOT_URL = "https://api.teleport.org/api/cities/?search=";
const EMBED = "&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores";


export function addData(city) {
     const URL = `${ROOT_URL}${city}${EMBED}`
     const request = axios.get(URL);

     return {
         type: "FETCH_SUCCESS",
         payload: request
     };
}