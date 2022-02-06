import React from "react";
import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>
    } else {
        return (
            < div className="image-gallery">
            {/* <p>Search Results</p> */}
         {results.map((image)=>(
             <img className="card-image" src={image} alt="space" />
         ))}
            </div>
        );
    }

};

export default SearchResults;