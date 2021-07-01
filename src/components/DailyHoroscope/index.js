import React from "react"; 
// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
//need to pass through button class & selection selectZodiac
function DailyHoroscope() {
    const URL = 'https://aztro.sameerkumar.website/?sign=' + {sign} + '&day=today';
    fetch(URL, {
        method: 'POST'
    }).then(response => response.json())
    .then(function(data) {
        switch (data) {
        case "aries":

        break;
        case "taurus":

        break;
        case "gemini":

        break;
        case "cancer":

        break;
        case "leo":

        break;
        case "virgo":
        
        break;
        case "libra":

        break;
        case "scorpio":

        break;
        case "sagittarius":

        break;
        case "capricorn":

        break;
        case "aquarius":

        break;
        case "pisces":

        break;
        }
    });
  };

  export default DailyHoroscope;