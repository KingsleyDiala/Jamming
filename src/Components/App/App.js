import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // Search Result object
      searchResults: [],
      PlaylistName: 'My Playlist',
      // Playlist Object
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // Accepts a track, uses the track id property to check it's state and add to playlist if new
  addTrack(track) {
    let playlist = this.state.playlistTracks;
    if (playlist.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      playlist.push(track);
      this.setState({ playlistTracks: playlist })
    }
  }

  removeTrack(track) {
    let playlist = this.state.playlistTracks;
    playlist = playlist.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: playlist })
  }

  updatePlaylistName(name) {
    this.setState({ PlaylistName: name });
  }


  // Generates an array of uri values called trackURIs from the playlistTracks property.
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    return Spotify.savePlaylist(this.state.playlistTracks, trackURIs)
    .then( () => {
      this.setState({ PlaylistName: 'New Playlist', playlistTracks: [] })
    })
  }


  // Accepts a search term, update searchResults state.
  search(term) {
    Spotify.search(term).then(response => {
      this.setState({ searchResults: response })
    })
  }


  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch= { this.search } />
    <div className="App-playlist">
      <SearchResults searchResult={ this.state.searchResults } onAdd={ this.addTrack } />
      <Playlist playlist={ this.state.playlistTracks } removeTrack= { this.removeTrack } onNameChange= { this.updatePlaylistName } onSave= {this.savePlaylist } />
    </div>
  </div>
  </div>
    );
  }
}

export default App;