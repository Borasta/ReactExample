import React from "react";

import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

export default class FilterableProductTable extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			filter: "",
			checked: false
		}
	}

	onChange(ev) {
		let target = ev.target;
		let name = target.name;
		let value = target.type === "checkbox" ? target.checked : target.value;
		switch (name) {
			case "search":
				this.updateFilter(value);
				break;
			case "checker":
				this.updateChecker(value);
				break;
			default:
				console.log("Esta etiqueta no esta soportada");
				break;
		}
	}

	updateFilter(val) {
		this.setState({
			filter: val
		});
	}

	updateChecker(val) {
		this.setState({
			checked: val
		});
	}

	render() {
		return (
			<div>
				<SearchBar onChange={this.onChange}/>
				<ProductTable products={this.props.store} state={this.state}/>
			</div>
		)
	}

}