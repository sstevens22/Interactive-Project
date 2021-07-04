import "../../App.css";
import React, { useState, useEffect } from "react";
// import { render } from '@testing-library/react';
const startTarot = document.getElementById("#startTarot");

function Tarot() {
    const [apiResponse, setApiResponse] = useState();

    useEffect(() => {
        if(!apiResponse === apiResponse)
        return apiCall();
    })
  // // <button id="startTarot"></button>
  const apiCall = () => {
  fetch("https://tarot.p.rapidapi.com/render_form/tarot-three-card", {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_TAROT_API_KEY,
      "x-rapidapi-host": "tarot.p.rapidapi.com",
    },
  }).then((response) => response.json())
  .then((json) => {
      setApiResponse(json);
  });
  };
  console.log(apiResponse);
return(
    <div className='tarot-container'>
            <video src="/videos/Astro.mp4" autoPlay loop muted />
            <h1>Tarot</h1>
            </div>
)

  return(
    <div>
      <h1 className="tarot">TAROT</h1>
      {/* <div>{apiResponse.body.data}</div> */}
    </div>
  );
}
// })
// .then(response => {
//     const tarotCard = document.createElement("div").addClass("card-body");
//     const apiBody = document.createElement("<p>").html(response.body);
//     tarotCard.append(apiBody);
// })
// .catch(err => {
// 	console.error(err);
// });

export default Tarot;
