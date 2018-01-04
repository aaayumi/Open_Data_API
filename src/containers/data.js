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
             {data.name}
             {data.score_out_of_10}
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
    
    console.log( score)// returns [7.721, 5.112, 2.668, 2.609000000000001, 6.5585, 4.3845, 8.418, 9.924, 9.081666666666665, 5.589, 5.1165, 3.7184999999999997, 5.990000000000001, 1.714, 7.2265, 6.5055, 4.7645]

    return(
         <div>
             <p>{summary.teleport_city_score}</p>
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
