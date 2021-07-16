import React from 'react';
import '../../App.css';
import Auth from '../../utils/auth';


const AirSignList = ({ airSigns, title }) => {
  if (!airSigns.length) {
    return <h3>No Messages Yet</h3>;
  }
  const getProfile = Auth.getProfile();

  return (
    <div>
      <h3>{title}</h3>
      {airSigns &&
        airSigns.map(airSign => (
          <div key={airSign._id} className={getProfile.data.username===airSign.username ? "message-air" : "message-other"}>
              <h2
                to={`/profile/${airSign.username}`}
                style={{ fontWeight: 700 }}
                className="card-header"
              >
                {airSign.username}
              </h2>{' '}
              Messaged the chat room: {airSign.createdAt}
            <div className="card-body">
              <h1 to={`/airSign/${airSign._id}`}>
                <p>{airSign.airMessage}</p>
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AirSignList;