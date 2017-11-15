import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addData } from "../actions/index";
import _ from "lodash";

class Search extends Component{
	componentDidMount(){
		this.props.addData()
		console.log("data" + this.props.data)
	}
    render(){
        let item;
        if(this.props.data) {
          item = _.map(this.props.data, data => {

         return (
             <li key={data.id}>
             {data.title}
             </li>
         /* this returns empty data. Only bullet button appears.
         In console, it says [Each child in an array or iterator should have a unique "key" prop.]
         Even though I added a key value. */
         )
     })
    }   


return(
    <div>{item}</div>
)
}
}

function mapStateToProps(state){
	return {
		data : state.data.data
	}
}

export default connect(mapStateToProps, {addData})(Search);
