import React, { useState } from 'react';
import '../styles/App.css';
import Search from "./Search"
import SearchResults from './SearchResults';
import propTypes from 'prop-types';
import uuid from 'react-uuid';

function App() {
const [searchResults, setSearchResults] = useState([]);
// const key = uuid();

  return (
    <div className="App">
      <img className='logo' src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' alt='nasa logo'/>
      < Search setSearchResults={setSearchResults} />  
      <SearchResults key={uuid} results={searchResults} />
    </div>
  );
}

export default App;

App.Prototype = {
searchResults: propTypes.array.isRequired,
setSearchResults: propTypes.array.isRequired,
};