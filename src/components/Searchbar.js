import React from "react"

function SearchBar() {
    return (
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search apps" />
      <button class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
    </form>
    );
  }
  
  export default SearchBar;