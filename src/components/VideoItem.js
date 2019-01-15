import './VideoItem.css';
import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

class VideoItem extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const video = this.props.video;
    return (
      <div key={video.id.videoId} onClick={ () => this.props.selectVideo(video)} className="video-item item">
        <img
          className="ui image" 
          src={video.snippet.thumbnails.medium.url} 
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { selectVideo })(VideoItem);