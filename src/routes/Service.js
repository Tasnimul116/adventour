import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ServiceImg from "../assets/10.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'

export default function Service() {
  return (
    <>
    <Navbar/>

    <Hero cName="hero-mid" 
    heroImg= {ServiceImg} 
    title = "Services"
    btnClass="hide"
    />


    <Trip />

<Footer />
</>
  )
}
