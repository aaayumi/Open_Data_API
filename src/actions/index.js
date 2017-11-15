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
	const URL = "https://jsonplaceholder.typicode.com/posts";
	return fetch(URL, { method: 'GET'})
	    .then( response => Promise.all([response, response.json()]));

}
    