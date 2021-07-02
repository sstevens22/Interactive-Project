import React, { useState } from "react";
import DailyHoroscope from "../DailyHoroscope";
// import ZodiacSearch from "../FindZodiac";
import "../../App.css";
// import { useParams } from "react-router-dom";
// import HoroscopeApi from "aztro-js";
// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
//add value for each sign
function Horoscope() {
  const [sign] = useState([
    {
        zodiac: "Aries",
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

 const [currentSign, setCurrentSign] = useState(null);
//  const { value } = useParams();
 const handleButton = event => {
     const { sign, value } = event.target;

     setCurrentSign({
         ...currentSign,
         [sign]: value
     });
 };


  return (
    <div>
       <div className='horoscope-container'>
            <video src="/videos/Astro.mp4" autoPlay loop muted />
            <h1>Horoscope</h1>
            </div>
      {/* <ZodiacSearch /> */}
      {/* e.target value and map */}
      {sign.map((sign) => (
          <button onClick={(e)=>(handleButton(e))} type="submit">{sign.zodiac}</button>
        // <button onClick={DailyHoroscope} type="submit">{sign.zodiac}</button>
      ))}
    </div>
  );
}


export default Horoscope;
