import React, { Component } from 'react';
import { connect } from "react-redux";
import { addData } from "../actions/index";

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			city : ""
		}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
       
    return(
        <div className="search">
        <p>Search for your ideal city in the world!</p>
        <form onSubmit={this.handleSubmit}>
        <input type="text"
           placeholder="Add City ex) Tokyo"
           onChange={this.handleChange}
           value={this.state.city}
           />
        <button>Submit</button>
        </form>
        </div>
        )
     }
 }

export default connect(null, {addData})(Search);
