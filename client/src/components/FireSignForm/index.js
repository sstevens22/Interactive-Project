import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_FIRESIGN } from '../../utils/mutations';
import { QUERY_FIRESIGN } from '../../utils/queries';

const FireSignForm = () => {
  const [fireMessage, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addFireSign, { error }] = useMutation(ADD_FIRESIGN, {
    update(cache, { data: { addFireSign } }) {
      try {
        // update fireMessage array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { fireSigns } = cache.readQuery({ query: QUERY_FIRESIGN });
        cache.writeQuery({
          query: QUERY_FIRESIGN,
          data: { fireSigns: [addFireSign, ...fireSigns] }
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
      await addFireSign({
        variables: { fireMessage }
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
          placeholder="Lets message the fire chat room!"
          value={fireMessage}
          className="chat-textarea"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default FireSignForm;

