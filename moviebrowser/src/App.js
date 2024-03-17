import './App.css';
import { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import {Routes, Route} from 'react-router-dom';
import MovieView from './components/MovieView';
import NoResultsView from './components/NoResultsView';
import TMBDView from './components/TMBDView';
import APIKey from './components/API_Info';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect (() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${searchText}&page=1include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }
  },[searchText])

  return (
    <div>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        inputText={inputText}
        setInputText={setInputText}/>
      <Routes>
        <Route path="/" exact element ={<HomeView />} />
        <Route path="/about" element ={<AboutView />} />
        <Route path="/search" element ={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element ={<MovieView />} />
        <Route path="*" element = {<NoResultsView />} />
        <Route path="/TMBD" element = {<TMBDView />} />
      </Routes>
    </div>
  );
}

export default App;