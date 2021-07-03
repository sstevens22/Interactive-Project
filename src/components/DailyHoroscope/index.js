import React, {useState, Component } from "react"; 
// import Horoscope from "../pages/Horoscope"
import { Link } from 'react-router-dom';
import Horoscope from "../pages/Horoscope";


// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
//need to pass through button class & selection selectZodiac

// this needs to be somewhere to bring in sign <Horoscope sign={sign} />
    class DailyHoroscope extends Component { 
        constructor(props){
            super(props);
            this.state = {
                sign : [],
              json: {}
            }
            
        }
        
        componentDidMount = () => {
            const URL = 'https://aztro.sameerkumar.website/?sign=leo&day=today';
            // const URL = 'https://aztro.sameerkumar.website/?sign=' + {sign} + '&day=today';
            fetch(URL, {
                method: 'POST'
            }).then(response => response.json())
            .then(json => { this.setState({json}); });
        }
    
       render(){
            return (
              <div>
                  Current Date: {this.state.json.current_date} <br />
                  Compatibility: {this.state.json.compatibility} <br />
                  Lucky Number: {this.state.json.lucky_number} <br />
                  Lucky Time: {this.state.json.lucky_time} <br />
                  Color: {this.state.json.color} <br />
                  Date Range: {this.state.json.date_range} <br />
                  Mood: {this.state.json.mood} <br />
                  Description: {this.state.json.description} <br />
              </div>
            );
       }
        
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
   


  