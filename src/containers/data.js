import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
//import Highcharts from 'highcharts';

class Data extends Component{
    render(){
        var item;
       
        const categories = _.get(this.props.data, 
            'data._embedded.city:search-results[0]._embedded.city:item._embedded.city:urban_area._embedded.ua:scores.categories', [])
         
        const summary = _.get(this.props.data, 
            'data._embedded.city:search-results[0]._embedded.city:item._embedded.city:urban_area._embedded.ua:scores', [])

        const scoreArray =_.get(this.props.data,'data._embedded.city:search-results[0]._embedded.city:item._embedded.city:urban_area._embedded.ua:scores.categories[0].score_out_of_10', [])

          if(this.props.data) {
          item = _.map(categories, data => {
           
         return (
             <li key={data.name}>
                 {data.name}  {data.score_out_of_10}
             </li>
         )
     })
    }   
    
    var score =[];

    // extract score data and store them in array
    if(categories){
         _.map(categories, data=> {
        return score.push([data.score_out_of_10],)
            })
    }
    return(
         <div className="data">
             <h2>Total Score : {(summary.teleport_city_score)} </h2>
             <div>{item}</div>
        </div>
    )
    }
}

function mapStateToProps(state) {
	return {
		data : state.data
	}
}

export default connect(mapStateToProps, null)(Data);
