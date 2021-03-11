
import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchInput: "",
        };
        
        this.handleInputChange = event => {
            this.setState({ searchInput: event.target.value }); 
            // console.log(this.state.searchInput)
            this.props.filterByProperty(this.state.searchInput)
          };
    }

  

  render() {
    return (

      <div>
        <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange = {this.handleInputChange}/>
    </div>
      </div>
    );
  }
}

export default Search;
