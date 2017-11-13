import React, { Component } from "react";
import { connect } from "react-redux";

class Data extends Component {

	render(){
		
		return(
              <div>Data
              <p>{this.props.data}</p>
              </div>
			)
	}
}

function mapStateToProps({ data }) {
	console.log("get")
	return { data };
}

export default connect(mapStateToProps)(Data);