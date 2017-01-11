import React, { Component } from 'react';


class SearchBar extends Component{
  constructor(props, {searchVideo}){
  super(props);
  
  this.state = { term: ''};
  }
  
  onInputChange(term){
    this.setState({ term});
    this.props.onSearchTermChange(term);
  }
  
  render(){
    return(
      <div className="search-bar" >
        <input
         placeholder="SEARCH A VIDEO"
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} />
       
      </div>
    )
  }
}

  
export default SearchBar;