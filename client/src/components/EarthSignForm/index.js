import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_EARTHSIGN } from '../../utils/mutations';
import { QUERY_EARTHSIGN } from '../../utils/queries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const EarthSignForm = () => {
  const [earthMessage, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addEarthSign, { error }] = useMutation(ADD_EARTHSIGN, {
    update(cache, { data: { addEarthSign } }) {
      try {
        // update earthMessage array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { earthSigns } = cache.readQuery({ query: QUERY_EARTHSIGN });
        cache.writeQuery({
          query: QUERY_EARTHSIGN,
          data: { earthSigns: [addEarthSign, ...earthSigns] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
    }
  });

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addEarthSign({
        variables: { earthMessage }
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className= "message-div">
      <p className={`${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span>Something went wrong...</span>}
      </p>
      <form
        onSubmit={handleFormSubmit}
      >
      <button className= "submit-message-button" type="submit"><FontAwesomeIcon icon={faCheckCircle} size="3x"/></button> 
        <textarea
          placeholder="Lets message the earth chat room!"
          value={earthMessage}
          className="chat-textarea"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default EarthSignForm;
