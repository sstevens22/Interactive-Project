import React, { useState, useContext, useEffect } from "react";
import DailyHoroscope from "../DailyHoroscope";
import { Context } from '../../Store';
// import ZodiacSearch from "../FindZodiac";
import "../../App.css";
// import { useParams } from "react-router-dom";
// import HoroscopeApi from "aztro-js";
// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
//add value for each sign
function Horoscope() {
  const [sign] = useState([
    {
        zodiac: "aries",
        icon: "",
        value: 0
    },
    {
        zodiac: "Taurus",
        icon: "",
        value: 1
    },
    {
        zodiac: "Gemini",
        icon: "",
        value: 2
    },
    {
        zodiac: "Cancer",
        icon: "",
        value: 3
    },
    {
        zodiac: "Leo",
        icon: "",
        value: 4
    },
    {
        zodiac: "Virgo",
        icon: "",
        value: 5
    },
    {
        zodiac: "Libra",
        icon: "",
        value: 6
    },
    {
        zodiac: "Scorpio",
        icon: "",
        value: 7
    },
    {
        zodiac: "Sagittarius",
        icon: "",
        value: 8
    },
    {
        zodiac: "Capricorn",
        icon: "",
        value: 9
    },
    {
        zodiac: "Aquarius",
        icon: "",
        value: 10
    },
    {
        zodiac: "Pisces",
        icon: "",
        value: 11
    },
  ]);


 const [currentSign, setCurrentSign] = useState('');
 const [state, setState] = useContext(Context);
//  const { value } = useParams();
// console.log(state.zodiacsign);

//bring back in for horoscope
// useEffect(() => {
//  document.button.onClick= handleButton(e)
// }, [])

const handleButton = event => {

    setState({
        
        "zodiacsign" : event.target.value
     } )
     
    //  console.log(sign.zodiac)
    //  console.log(state.zodiacsign)
 };

  return (
       <div className='horoscope-container'>
            <video src="/videos/Astro.mp4" autoPlay loop muted />
            <h1>Horoscope</h1> 
      <h2>Click your sign to read your daily horoscope</h2> 
      {/* <ZodiacSearch /> */}
      {/* e.target value and map */}
      <p>
      {sign.map((sign) => (
          <button key={sign.value} value={sign.zodiac} onClick={(e)=>(handleButton(e))} type="submit">{sign.zodiac}</button>
          
        // <button onClick={DailyHoroscope} type="submit">{sign.zodiac}</button>
      ))}
     
      <DailyHoroscope sign={state.zodiacsign} />
      </p>
      </div>
  )
  
}

export default Horoscope;
