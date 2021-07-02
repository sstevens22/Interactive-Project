import '../../App.css';
import React from 'react';
// import { render } from '@testing-library/react';
const startTarot = document.getElementById('#startTarot');


function Tarot() {
 
 // // <button id="startTarot"></button>
fetch("https://tarot.p.rapidapi.com/render_form/tarot-three-card", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.REACT_APP_TAROT_API_KEY,
		"x-rapidapi-host": "tarot.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
        return response.json();

})
.then(response => {
    const tarotCard = document.createElement("div").addClass("card-body");
    const apiBody = document.createElement("<p>").html(response.body);
    tarotCard.append(apiBody);
})
.catch(err => {
	console.error(err);
}); 

return(
    <h1 className='tarot'>TAROT</h1>
)

};

export default Tarot;