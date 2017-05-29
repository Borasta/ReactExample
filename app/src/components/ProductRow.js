import React from "react";

export default class ProductRow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h6>{this.props.product}</h6>
		)
	}

}