import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// initialize state, only time anything is assigned to this.state
		this.state = {term: '' };
	}

	render() {
		// class components must have render method with some JSX
		// event handler with arrow function
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
			</div>
			);
	}
}

export default SearchBar;