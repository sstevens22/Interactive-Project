import React from 'react';
import '../../App.css';

const EarthSignList = ({ earthSigns, title }) => {
  if (!earthSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {earthSigns &&
        earthSigns.map(earthSign => (
          <div key={earthSign._id} className="message-earth">
              <h2
                to={`/profile/${earthSign.username}`}
                style={{ fontWeight: 700 }}
                className="card-header"
              >
                {earthSign.username}
              </h2>{' '}
              Messaged the chat room: {earthSign.createdAt}
            <div className="card-body">
              <h1 to={`/earthSign/${earthSign._id}`}>
                <p>{earthSign.earthMessage}</p>
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EarthSignList;