import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {

  render() {
    const video = this.props.selectedVideo;
    if (!video) {
      return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p className="">{video.snippet.description}</p>    
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedVideo: state.selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);