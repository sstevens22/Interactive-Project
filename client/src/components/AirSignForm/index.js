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
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a message in chat..."
          value={airMessage}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AirSignForm;
