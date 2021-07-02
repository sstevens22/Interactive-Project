import React, {Component } from "react"; 
// import Horoscope from "../pages/Horoscope"
import { Link } from 'react-router-dom';


// Aries,Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
//need to pass through button class & selection selectZodiac
function DailyHoroscope(props) {
    const {
        sign = [],
        setCurrentSign,
        currentSign,
    } = props;

    class Aztro extends Component {
        constructor(props){
            super(props);
            this.state = {
              json: {}
            }
        }

        componentDidMount () {
            const URL = 'https://aztro.sameerkumar.website/?sign=' + {sign} + '&day=today';
            fetch(URL, {
                method: 'POST'
            }).then(response => response.json())
            .then(json => { this.setState({json}); });
        }

    // const URL = 'https://aztro.sameerkumar.website/?sign=' + {sign} + '&day=today';
    // fetch(URL, {
    //     method: 'POST'
    // }).then(response => response.json())
    // .then(function(data) {
    //     console.log(data)
    render() {
        return(
            <div>
                {sign.map((sign, i) => ( 
                    <div key={sign[i]}>
                   <Link to={`/Horoscope/${sign.value}`}>
                    <p>${this.state.json.description}</p>
                   </Link>
                   </div>
                ))}
            </div>
        )
    }
       

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
    };
  };

  export default DailyHoroscope;