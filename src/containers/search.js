import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addData } from "../actions/index";

class Search extends Component{
	 constructor(props){
       	super(props);
       	this.state = {
          city : ""
       	}
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       }

    handleChange(event) {
    	console.log(event.target.value)
    	this.setState({
    		city: event.target.value
    	});
    }

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.city)
		this.props.addData(this.state.city);
		this.setState({
			city: ""
		});
	}
	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
			<input type="text"
			       placeholder="add city name"
                   onChange={this.handleChange}
                   value={this.state.city} />
            <button>Submit</button>
            </form>
			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addData }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);