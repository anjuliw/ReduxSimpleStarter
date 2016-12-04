import React from 'react';
import ReactDOM from 'react-dom';

// create new component. shoud produce some HTML.
const App = () => {
	return <div>hi!</div>;
}

// take this component's generated HTML and insert it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));