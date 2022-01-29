import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './components/Movie';

// `BrowserRouter` connects the app to the Browser's URL 
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MovieCollection from './components/MovieCollection';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies" element={<MovieCollection />}>
      </Route>
      <Route path="/movies/:movieTitle" element={<Movie />}/>

      {/* The "*" has special meaning here. It will match only when no other routes do. */}
      <Route 
        path="*"
        element={<h1>404 (Page Not Found)</h1>}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
