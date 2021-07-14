import React from 'react';
import '../../App.css';

const WaterSignList = ({ waterSigns, title }) => {
  if (!waterSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {waterSigns &&
        waterSigns.map(waterSign => (
          <div key={waterSign._id} className="message-water">
              <h2
                to={`/profile/${waterSign.username}`}
                style={{ fontWeight: 700 }}
                className="card-header"
              >
                {waterSign.username}
              </h2>{' '}
              Messaged the chat room: {waterSign.createdAt}
            <div className="card-body">
              <h1 to={`/waterSign/${waterSign._id}`}>
                <p>{waterSign.waterMessage}</p>
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WaterSignList;