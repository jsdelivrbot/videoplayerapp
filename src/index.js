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

    this.state = {videos:[]};

    YTSearh({key:API_KEY, term: "surfboards"}, (videos) => {
      this.setState({videos}); // The same as this.setState({videos:videos})
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

ReactDOM.render(<App />, document.querySelector(".container"));
