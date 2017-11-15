import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addData } from "../actions/index";
import _ from "lodash";
import _get from 'lodash/get';

class Search extends Component{
	componentDidMount(){
		this.props.addData()
		console.log("data" + this.props.data)
	}
    render(){
        let item;
         console.log(this.props.data)

         const categories = _.get(this.props.data, 
         	'_embedded.city:search-results[0]._embedded.city:item._embedded.city:urban_area._embedded.ua:scores.categories', [])
         console.log(categories)

          if(this.props.data) {
          item = _.map(categories, data => {

         return (
             <li key={data.name}>
             {data.name}
             {data.score_out_of_10}
             </li>
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
