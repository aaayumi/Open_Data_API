import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import _get from 'lodash/get';


class Data extends Component{
   

    render(){
        let item;
    
         const categories = _.get(this.props.data, 
            'data._embedded.city:search-results[0]._embedded.city:item._embedded.city:urban_area._embedded.ua:scores.categories', [])
         
         const summary = _.get(this.props.data, 
            'data._embedded.city:search-results[0]._embedded.city:item._embedded.city:urban_area._embedded.ua:scores', [])

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
     <div>
    <p>{summary.teleport_city_score}</p>
    <div>{item}</div>
    </div>
)
}
}

function mapStateToProps(state){
	return {
		data : state.data
	}
}

export default connect(mapStateToProps, null)(Data);
