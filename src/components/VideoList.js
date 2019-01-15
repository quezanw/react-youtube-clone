import React from 'react';
import VideoItem from './VideoItem';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

class VideoList extends React.Component {
  
  render() {
    const renderedList = this.props.videos.map( video => {
      return <VideoItem 
        key={video.id.videoId} 
        onVideoSelect={this.props.selectVideo} 
        video={video} 
        />
    });

    return (
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos }
}

export default connect(mapStateToProps, { selectVideo })(VideoList);
