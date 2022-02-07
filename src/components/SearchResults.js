import React from "react";
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p className="noResults">No results found</p>
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

SearchResults.prototype = {
results: PropTypes.array.isRequired
};