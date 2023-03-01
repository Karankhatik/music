import React from 'react';
import  Home  from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Playlist from './components/Playlist';
import Favorite from './components/Favorite';

function App() {
  return (
    //All the Router are defined here
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/playlist' element={<Playlist/>} />
        <Route  path='/favourites' element={<Favorite/>} />
      </Routes>
    </Router>
  );
}

export default App;
