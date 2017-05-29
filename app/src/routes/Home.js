import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Este es el home</h1>
				<Link to="/store">Tienda</Link>
			</div>
		)
	}

}