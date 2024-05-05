import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AstronomyPicture from './components/AstronomyPicture';
import EpicImages from './components/EpicImages';
import NasaImageGallery from './components/NasaImageGallery';
import MarsRoverPhotos from './components/MarsRoverPhotos';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apod" element={<AstronomyPicture />} />
            <Route path="/epic" element={<EpicImages />} /> 
            <Route path="/nasa-images" element={<NasaImageGallery />} />
            <Route path="/mars-rover-photos" element={<MarsRoverPhotos />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
