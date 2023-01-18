import React from 'react'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from "../components/Trip"

export default function Home() {
  return (
    <>
         <Navbar/>

         <Hero cName="hero" 
         heroImg="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
         title = "Your Journey Your Story"
         text = "Choose Your Travel destination"
         buttonText="Travel Plan"
         url ="/"
         btnClass="show"
         />
      
       <Destination />

       <Trip />
       <Footer />
    </>
  )
}
