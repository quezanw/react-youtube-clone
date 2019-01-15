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
