import"../components/TripStyle.css";
import React from 'react'
import TripData from "./TripData";
import Trip1 from "../assets/13.jpg";
import Trip2 from "../assets/12.jpg";
import Trip3 from "../assets/10.jpg";




export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trip-card">
        <TripData 
        image={Trip1}
        heading="Trip in Italy"
        text="Italy on a Budget tours is the leading Italian travel company since 2013 based in Florence with epic trips in Italy designed for young, independent and budget-minded travelers. We are specialized in tours for 18-39's but we offer a variety of products suitable for all ages and budgets. This is not a typical big-party bus tour company! Small groups, local team, more cultural, authentic Italian experience, and personal freedom to follow the whim of the moment are the order of the day, every day."/>

<TripData 
        image={Trip2}
        heading="Trip in Pakistan"
        text="From the mighty stretches of the Karakorams in the North to the vast alluvial delta of the Indus River in the South, Pakistan remains a land of high adventure and nature. Trekking, mountaineering, white water rafting, wild boar hunting, mountain and desert jeep safaris, camel and yak safaris, trout fishing and bird watching, are a few activities, which entice the adventure and nature lovers to Pakistan."/>

<TripData 
        image={Trip3}
        heading="Trip in Nepal"
        text="The near otherworldly Himalayan kingdom of Nepal can trace its history back to the 7th century and the arrival of Kirati sheepherders. Today, misty temples perch on rugged ridges, monasteries peer over deep valleys, faded by centuries, and Kathmandu's Old City brims with ancient Buddhist temples and ornate palaces."/>
      </div>


    </div>
  )
}
