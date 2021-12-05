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
      searchResults: [{name: 'name-1', artist: 'artist-1', album: 'album-1', id: 1}, {name: 'name-2', artist: 'artist-2', album: 'album-2', id: 2}, {name: 'name-3', artist: 'artist-3', album: 'album-3', id: 3}, {name: 'name-4', artist: 'artist-4', album: 'album-4', id: 4}, {name: 'name-5', artist: 'artist-5', album: 'album-5', id: 5}],
      PlaylistName: 'My Playlist',
      // Playlist Object
      playlistTracks: [{name: 'Playlist-1', artist: 'PlaylistArtist-1', album: 'PlaylistAlbum-1', id: 6}, {name: 'Playlist-2', artist: 'PlaylistArtist-2', album: 'PlaylistAlbum-2', id: 7}, {name: 'Playlist-3', artist: 'PlaylistArtist-3', album: 'PlaylistAlbum-3', id: 8}, {name: 'Playlist-4', artist: 'PlaylistArtist-4', album: 'PlaylistAlbum-4', id: 9}, {name: 'Playlist-5', artist: 'PlaylistArtist-5', album: 'PlaylistAlbum-5', id: 10}],
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
  }


  // Accepts a search term and logs the term to the console
  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
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