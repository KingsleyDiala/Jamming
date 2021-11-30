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
    <h3>Track Name</h3>
    <p>Track Artist | Track Album</p>
  </div>
  {renderAction()}
</div>
    );
  }
}