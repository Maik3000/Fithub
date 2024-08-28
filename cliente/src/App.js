import { useEffect } from "react";
import axios from "axios";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
//import Dashboard from './components/Dashboard';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import HealthDataEntry from './components/HealthDataEntry';




function App() {

  useEffect(() =>{
    const getData= async() =>{
      try{
        const {data} = axios.get('/api');
        console.log(data);
      }catch(e){
        console.log(e);
      }
    };
    getData();
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/health-data" element={<HealthDataEntry />} />
      </Routes>
    </Router>
  );
}

export default App;