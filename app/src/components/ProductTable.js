import React from "react";

import ProductCategoryRow from "./ProductCategoryRow.js";
import ProductRow from "./ProductRow.js";

export default class ProductTable extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let rows = [];
		let lastCategory = null;
		if( this.props.state.checked == true && this.props.products != null ) {
			
			this.props.products.forEach( (product, index) => {

				let filter = this.props.state.filter;
				if(product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {

					if( product.category != lastCategory )
						rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)

					rows.push(<ProductRow product={product.name} key={product.name}/>)
					lastCategory = product.category;
				}

			});
		} else if( this.props.products != null ) {

			this.props.products.forEach((product) => {

				if( product.category != lastCategory )
					rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)

				rows.push(<ProductRow product={product.name} key={product.name}/>)
				lastCategory = product.category;
			})

		} else
			rows.push( <h1>Loading</h1> )

		return (
			<div>
				{rows}
			</div>
		)
	}
}