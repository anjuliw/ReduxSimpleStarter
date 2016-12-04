import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

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