import React from 'react';
import './Track.css';

export class Track extends React.Component {
  render() {
    const renderAction = () => {
      if (this.props.isRemoval) {
        return (
          <button className="Track-action">-</button>
        );
      } else {
        return (
          <button className="Track-action">+</button>
        );
      }
    };
    return (
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  {renderAction()}
</div>
    );
  }
}