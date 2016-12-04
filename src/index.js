import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDQ5Dp51UNEKZ2cKYm4BzVkSLKXi4Y7X_c';

// create new component. shoud produce some HTML.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}

// take this component's generated HTML and insert it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));