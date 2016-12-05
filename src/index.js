import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDQ5Dp51UNEKZ2cKYm4BzVkSLKXi4Y7X_c';

// create new component. should produce some HTML.
class App extends Component {
constructor(props) {
	super(props);

	this.state = { videos: [] };

	YTSearch({key: API_KEY, term: 'zebras'}, videos => {
		// this.setState({ videos: videos }); // advanced syntax:
		this.setState({ videos });
	}); 
}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// take this component's generated HTML and insert it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));