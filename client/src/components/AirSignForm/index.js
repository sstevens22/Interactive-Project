import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_AIRSIGN } from '../../utils/mutations';
import { QUERY_AIRSIGN } from '../../utils/queries';

const AirSignForm = () => {
  const [airMessage, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addAirSign, { error }] = useMutation(ADD_AIRSIGN, {
    update(cache, { data: { addAirSign } }) {
      try {
        // update airMessage array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { airSigns } = cache.readQuery({ query: QUERY_AIRSIGN });
        cache.writeQuery({
          query: QUERY_AIRSIGN,
          data: { airSigns: [addAirSign, ...airSigns] }
        });
      } catch (e) {
        console.error(e);
      }

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
      await addAirSign({
        variables: { airMessage }
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
        <button className= "submit-message-button" type="submit">
          Submit
        </button>
        <textarea
          placeholder="Lets message the air chat room!"
          value={airMessage}
          className="chat-textarea"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default AirSignForm;
