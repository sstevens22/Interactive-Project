import React, { useState, useEffect, useContext } from "react";
import { Context } from '../../Store';

import Horoscope from "../pages/Horoscope";

// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces




function DailyHoroscope({sign}) {

  const [currentSign, setSign] = useState();
 
const [state, setState] = useContext(Context);
const [previousSign, setPreviousSign] = useState(state);
  // }
  // console.log(typeof state.zodiacsign);

  
  
  useEffect(() => {
        apiCall(state.zodiacsign);
  }, [state]);
  const apiCall = (searchSign) => {
   
// console.log(searchSign);
    // const URL = `https://aztro.sameerkumar.website/?sign=${state.zodiacsign}&day=today`;
    const URL = 'https://aztro.sameerkumar.website/?sign=' + searchSign + '&day=today';
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        setSign(json);
        console.log(currentSign);
      });
  };
 


  return (
    <div>
        {!currentSign ? <div>Loading</div> : <div>
       Date Range: {currentSign.date_range} <br />
                  Compatibility: {currentSign.compatibility} <br />
                  Lucky Number: {currentSign.lucky_number} <br />
                  Lucky Time: {currentSign.lucky_time} <br />
                  Color: {currentSign.color} <br />
                  {/* Date Range: {currentSign.date_range} <br /> */}
                  Mood: {currentSign.mood} <br />
                  Daily Horoscope: {currentSign.description} <br /> 
              </div>  }
    </div>
  );
  //    }

  // use return to pass props user profile to grab horosope info
}

export default DailyHoroscope;

// const URL = 'https://aztro.sameerkumar.website/?sign=' + {sign} + '&day=today';
// fetch(URL, {
//     method: 'POST'
// }).then(response => response.json())
// .then(function(data) {
//     console.log(data)
// render() {
//     return(
//         <div>
//             {sign.map((sign, i) => (
//                 <div key={sign[i]}>
//                <Link to={`/Horoscope/${sign.value}`}>
//                 <p>${this.state.json.description}</p>
//                </Link>
//                </div>
//             ))}
//         </div>
//     )
// }

// //map over a link to value in array
// switch (data) {
// case "aries":
//     <div>
//     <h2>{currentSign.zodiac}</h2>
//     <span onClick={() => {
//         setCurrentSign(sign);
//     }}></span>
//     {/* <p>{json.description}</p> */}
//     </div>
// break;
// case "taurus":

// break;
// case "gemini":

// break;
// case "cancer":

// break;
// case "leo":

// break;
// case "virgo":

// break;
// case "libra":

// break;
// case "scorpio":

// break;
// case "sagittarius":

// break;
// case "capricorn":

// break;
// case "aquarius":

// break;
// case "pisces":

// break;
// }
