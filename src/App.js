import React from 'react'
import "./style.css";
import Home from "./routes/Home"
import {Routes, Route} from "react-router-dom"
import Service from './routes/Service';
import Contact from './routes/Contact';
import About from './routes/About';

export default function App() {
  return (
    <div className='App'>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>

    </Routes>

      
    </div>
  )
}
