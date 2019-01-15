import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { fetchVideos } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchVideos("React JS");
  }
  // state = { 
  //   videos: [],
  //   selectedVideo: null
  // }; this is saved in the store 

  // onTermSubmit = async term => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   });

  //   this.setState({ 
  //     videos: response.data.items,
  //     selectedVideo: response.data.items[0]
  //   });
  // }

  // onVideoSelect = (video) => {
  //   this.setState( {selectedVideo: video });
  // }

  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <div className="ui grid">
          <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail />
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
            
          </div>
        </div>

      </div>
    );
  }
}


export default connect(null, { fetchVideos })(App);
