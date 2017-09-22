import React, {Component} from "react";
import ReactDOM from "react-dom";
//Import the Youtube search component
import YTSearh from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
// Youtube API key
const API_KEY = "AIzaSyBTrc8fqV837s6PrH5YS1I7CAtJlTknUt4";

// The root component of the app.
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearh({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector(".container"));
