import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [{name: 'name-1', artist: 'artist-1', album: 'album-1', id: 1}, {name: 'name-2', artist: 'artist-2', album: 'album-2', id: 2}, {name: 'name-3', artist: 'artist-3', album: 'album-3', id: 3}, {name: 'name-4', artist: 'artist-4', album: 'album-4', id: 4}, {name: 'name-5', artist: 'artist-5', album: 'album-5', id: 5}]
    };
  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    {/* <SearchBar /> */}
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
      {/* <Playlist /> */}
    </div>
  </div>
  </div>
    );
  }
}

export default App;