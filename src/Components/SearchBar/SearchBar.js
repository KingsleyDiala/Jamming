
import React from 'react';
import './SearchBar.css'


export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }


  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    const searchTerm = event.target.value;
    this.setState({ term: searchTerm })
  }


  render() {
    return (
      <div class="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange= { this.handleTermChange } />
  <button class="SearchButton">SEARCH</button>
</div>
    );
  }
}