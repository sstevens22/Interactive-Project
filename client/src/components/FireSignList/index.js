import React from 'react';
import '../../App.css';

const FireSignList = ({ fireSigns, title }) => {
  if (!fireSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {fireSigns &&
        fireSigns.map(fireSign => (
          <div key={fireSign._id} className="message-fire">
              <h2
                to={`/profile/${fireSign.username}`}
                style={{ fontWeight: 700 }}
                className="card-header"
              >
                {fireSign.username}
              </h2>{' '}
              Messaged the chat room: {fireSign.createdAt}
            <div className="card-body">
              <h1 to={`/fireSign/${fireSign._id}`}>
                <p>{fireSign.fireMessage}</p>
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FireSignList;