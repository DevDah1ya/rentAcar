import "../css/header.css";
import { setSearchQuery ,setCurrentPage } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
    dispatch(setCurrentPage(1));
    window.history.pushState({}, '', '1');

  };

  return (
    <div id="header">
      <div id="searchBar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="grey" >
          {" "}
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>

      <div id="Relevance">
        <h4>Relevance</h4>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </div>
      <div id="allBrands">
        <h4>All brands</h4>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </div>
    </div>
  );
}
