import "../../App.css";
import React, { useState } from "react";
import TarotReading from "../TarotReading";

// function video() {
//   return (
//     <div className="tarot-container">
//       <video src="/videos/Astro.mp4" autoPlay loop muted />
//       <h1>Tarot</h1>
//     </div>
//   );
// }
// video();
// button();
// function button() {
//   return (
//     <div>
//       <h2>Past, Present, Future</h2>
//       <h3>What do the cards say about your fate?</h3>
//       <button onClick={Tarot} type="submit">
//         Find Out
//       </button>
//     </div>
//   );
// }

export default function Tarot() {
  // const [randomCard, setRandomCard] = useState();
  const [results, setResults] = useState(null);

  // const drawCard = () => {

  const handleClick = () => {
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3", {
      method: "GET",
    })
      .then((response) => response.json())
      // handle ten random cards
      .then((data) => {
        // return(<div>{data.cards}</div>)
        setResults(data);
        console.log(data);
        // setRandomCard(json);
      });
  };

  // return <div>{data.cards}</div>;
  return (
    <div>
      <div>
        <h2>Past, Present, Future</h2>
        <h3>What do the cards say about your fate?</h3>
        <button onClick={handleClick} type="submit">
          Find Out
        </button>
      </div>
      {results && results.cards.map((result) => <TarotReading result={result} />)}
    </div>
  );
}

// function Tarot() {
//   const [apiResponse, setApiResponse] = useState();

//   useEffect(() => {
//     // if(!apiResponse === apiResponse)
//     apiCall();
//   }, []);
//   // // <button id="startTarot"></button>
//   const apiCall = () => {
//     fetch("https://tarot.p.rapidapi.com/render_form/tarot-three-card", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": process.env.REACT_APP_TAROT_API_KEY,
//         "x-rapidapi-host": "tarot.p.rapidapi.com",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setApiResponse(json);
//       });
//   };
//   // console.log(apiResponse);

//   return (
//     <div>
//       <h1 className="tarot">TAROT</h1>
//       {apiResponse ? (
//         <div dangerouslySetInnerHTML={{ __html: apiResponse.data }}></div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }
//<input type="submit" class="button" name="mystic_submit" value="Get Free Tarot Celtic Cross Reading">
// function button(){
//    return(
//     <div>
//       <h2>Past, Present, Future</h2>
//       <h3>What do the cards say about your fate?</h3>
//       <button onClick={Card} type="submit">Find Out</button>
//     </div>
//    );
// }

// function Card() {
//   // const [randomCard, setRandomCard] = useState();

//   // const drawCard = () => {

//   fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     // handle ten random cards
//     .then((data) => {
//       // return(<div>{data.cards}</div>)
//       console.log(data)
//     });

//     // return <div>{data.cards}</div>;
//     return (
//       <div>
//       <p>render</p>
//     </div>
//     )
//   };

//   fetch("https://tarot.p.rapidapi.com/render_result/tarot-three-card", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/json",
// 		"x-rapidapi-key": process.env.REACT_APP_TAROT_API_KEY,
// 		"x-rapidapi-host": "tarot.p.rapidapi.com"
// 	},
// 	"body": {
// 		"mystic_cardtype": 1,
// 		"mystic_email": "dummy@dummy.com",
// 		"mystic_name": "Brad Pitt",
// 		"mystic_question": "QKYOE",
// 		"mystic_reverse": 1
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// .catch(function (error) {
//   // handle what went wrong
//   console.error(error);

// fetch("https://tarot.p.rapidapi.com/result/tarot-three-card", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": process.env.REACT_APP_TAROT_API_KEY,
// 		"x-rapidapi-host": "tarot.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// button();
