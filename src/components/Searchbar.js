import React from "react"

function SearchBar(props) {
    return (
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search apps"  onChange={props.updateSearchTerm}/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
    </form>
    );
  }
  
  export default SearchBar;