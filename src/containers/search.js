import React, { Component } from 'react';

export default class Search extends Component{
	 constructor(props){
       	super(props);
       	this.state = {
          city : ""
       	}
       this.handleSubmit = this.handleSubmit.bind(this);
       }


	handleSubmit(e){
		console.log("hi")
	}
	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
			<input type="text"
			       placeholder="add city name"
               
                   value={this.state.city} />
            <button>Submit</button>
            </form>
			</div>
			)
	}
}