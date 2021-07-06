import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
// import '../HeroSection.css';

function SignUp() {
    return (
        <div className='signup-container'>
            <video src="/videos/Astro.mp4" autoPlay loop muted />
            <h1>Sign Up</h1>
            <div className="container my-1">
      
      <form >
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@mail.com"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
        <Link to="/login">
        ← Go to Login
      </Link>
      </form>
    </div>
            </div>
            
    )
}

export default SignUp

