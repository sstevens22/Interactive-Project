import React, { useState } from 'react';
import '../../App.css';
import { useMutation } from '@apollo/react-hooks';
import { ADD_WATERSIGN } from '../../utils/mutations';
import { QUERY_WATERSIGN } from '../../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const WaterSignForm = () => {
  const [waterMessage, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addWaterSign, { error }] = useMutation(ADD_WATERSIGN, {
    update(cache, { data: { addWaterSign } }) {
      try {
        // update waterMessage array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { waterSigns } = cache.readQuery({ query: QUERY_WATERSIGN });
        cache.writeQuery({
          query: QUERY_WATERSIGN,
          data: { waterSigns: [addWaterSign, ...waterSigns] }
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
      await addWaterSign({
        variables: { waterMessage }
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
      <form
        onSubmit={handleFormSubmit}
      >
        <button className= "submit-message-button" type="submit"><FontAwesomeIcon icon={faCheckCircle} size="3x"/></button>
        <textarea
          placeholder="Lets message the water chat room!"
          value={waterMessage}
          className="chat-textarea"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default WaterSignForm;
