import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { className, placeholder, onSearchHandler } = this.props;
    return(
      <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onSearchHandler}
         />
    )
  }
}

export default SearchBox;