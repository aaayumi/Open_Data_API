import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addData, fetchData } from "../actions/index";
import _ from "lodash";
import _get from 'lodash/get';

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			city : ""
		}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    	}

	componentDidMount(){
		//this.props.addData()
		//console.log("data" + this.props.data)
	}

	handleChange(event) {
		this.setState({
			city: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addData(this.state.city)
		this.setState({
			city: ""
		});
	}
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
    <form onSubmit={this.handleSubmit}>
    <input type="text"
           placeholder="add text"
           onChange={this.handleChange}
           value={this.state.city}
           />
    <button>Submit</button>
    </form>
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

export default connect(mapStateToProps, {addData})(Search);
