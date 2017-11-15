function fetchDataRequest(){
  return {
    type: "FETCH_DATA"
  }
}

function fetchDataSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}


export function addData(){
	return (dispatch) => {
		dispatch(fetchDataRequest());
		return fetchData().then(([response, json]) => {
			if(response.status === 200) {
				dispatch(fetchDataSuccess(json))
			}
			//error handling
		})
	}
}

function fetchData() {
	const URL = "https://api.teleport.org/api/cities/?search=Tokyo&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores";
	return fetch(URL, { method: 'GET'})
	    .then( response => Promise.all([response, response.json()]));
}
    