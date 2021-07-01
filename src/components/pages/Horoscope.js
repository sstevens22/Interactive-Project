import React, { useState } from "react";
// import DailyHoroscope from "../DailyHoroscope";
// import ZodiacSearch from "../FindZodiac";
import DailyHoroscope from "../DailyHoroscope";
import "../../App.css";
// import HoroscopeApi from "aztro-js";
// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces

function Horoscope() {
  const [sign] = useState([
    {
        zodiac: "Aries",
        icon: ""
    },
    {
        zodiac: "Taurus",
        icon: ""
    },
    {
        zodiac: "Gemini",
        icon: ""
    },
    {
        zodiac: "Cancer",
        icon: ""
    },
    {
        zodiac: "Leo",
        icon: ""
    },
    {
        zodiac: "Virgo",
        icon: ""
    },
    {
        zodiac: "Libra",
        icon: ""
    },
    {
        zodiac: "Scorpio",
        icon: ""
    },
    {
        zodiac: "Sagittarius",
        icon: ""
    },
    {
        zodiac: "Capricorn",
        icon: ""
    },
    {
        zodiac: "Aquarius",
        icon: ""
    },
    {
        zodiac: "Pisces",
        icon: ""
    },
  ]);

  return (
    <div>
      <h1 className="horoscope">HOROSCOPE</h1>
      {/* <ZodiacSearch /> */}
      {sign.map((sign) => (
          <button onClick={DailyHoroscope} type="submit">{sign.zodiac}</button>
      ))}
    </div>
  );
}


export default Horoscope;
