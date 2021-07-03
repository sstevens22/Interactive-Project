// // import React from "react";

// import { render } from "react-dom";

// // const startTarot = document.getElementById('#startTarot')

// function TarotDraw() {
//   fetch("https://tarot.p.rapidapi.com/render_form/tarot-three-card", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": process.env.REACT_APP_TAROT_API_KEY,
//       "x-rapidapi-host": "tarot.p.rapidapi.com",
//     },
//   }).then((response) => {
//     console.log(response);
//     return response.json();
//   });
//   //     // // .then(data => {
//   //     // //     const tarotCard = document.createElement("div")
//   //     // //     $("startTarot").onclick() = () => {

//   //     // //     }
//   const responseForm = (
//     <div>
//       <form>{response.body}</form>
//     </div>
//   );
//   ReactDOM.render(responseForm);

//   //     // // })
//   //     // .catch(err => {
//   //     //     console.error(err);
// }

// // TarotDraw();

// export default TarotDraw;
