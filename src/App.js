import React from 'react';
import './App.css';
import ApiComponent from "./components/ApiComponent";
import DetailPage from "./components/DetailPage";
import BookingPage from './components/BookingPage';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div className="App">
      <h1>TV Shows</h1>
        <Routes>
        <Route exact path='/' element={<ApiComponent />} />            
        <Route path="/detail/:id" element={<DetailPage />} />     
        <Route path="/detail/:id/booking" element={<BookingPage />} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;

