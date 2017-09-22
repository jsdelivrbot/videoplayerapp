import React, {Component} from "react";
import VideoListItem from "./VideoListItem";

class VideoList extends Component {

  render() {
    console.log(this.props.videos);
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          video={video} />
      )

    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

export default VideoList;
