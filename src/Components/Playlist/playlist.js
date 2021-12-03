  import React from "react";
  import "./Playlist.css";
  import TrackList from "../TrackList/TrackList";

  export class Playlist extends React.Component {
    constructor(props) {
      super(props);

      this.handleNameChange = this.handleNameChange.bind(this);
    }


    // Handles the event on Playlist name change.
    handleNameChange(event) {
      this.props.onNameChange(event.target.value);
    }



    render() {
      return (
        <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange= { this.handleNameChange } />
        <TrackList tracks={ this.props.playlist } removeTrack= { this.props.removeTrack } isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
      );
    }
  }
