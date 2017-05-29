import React from "react";

export default class SearchBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input 
					name="search" 
					onChange={this.props.onChange}
					type="text"
				/>
				<input
					name="checker"
					onChange={this.props.onChange} 
					type="checkbox"
				/>
			</div>
		)
	}

}