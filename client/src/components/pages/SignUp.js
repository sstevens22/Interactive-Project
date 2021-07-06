import React, {useState} from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
// import '../HeroSection.css';
import Auth from '../../utils/auth';

const SignUp = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  }; 
      
    return (
        <div className='signup-container'>
            <video src="/videos/Astro.mp4" autoPlay loop muted />
            <h1>Sign Up</h1>
            <div className="container my-1">
      
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@mail.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
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
      {error && <div>Signup failed</div>}
    </div>
            </div>
            
    )
}

export default SignUp

