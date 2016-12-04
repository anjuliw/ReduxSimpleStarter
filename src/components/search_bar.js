import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		// class components must have render method with some JSX
		// event handler with arrow function
		return <input onChange={event => console.log(event.target.value)} />;
	}
}

export default SearchBar;