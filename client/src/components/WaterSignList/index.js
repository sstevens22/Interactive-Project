import React from 'react';
import '../../App.css';
import Auth from '../../utils/auth';

const WaterSignList = ({ waterSigns }) => {
  if (!waterSigns.length) {
    return <h3>No Messages Yet</h3>;
  }
  const getProfile = Auth.getProfile();
    return (    
    <div className='flex-column'>
    {waterSigns &&
      waterSigns.map(waterSign => (
        <div key={waterSign._id} className={getProfile.data.username===waterSign.username ? "message-water" : "message-other"}>
            <h2 
              to={`/profile/${waterSign.username}`}
              style={{ fontWeight: 700 }}
              className="card-header"
            >
              {waterSign.username}
            </h2>
            Messaged the chat room: {waterSign.createdAt}
          <div className="card-body">
            <h1 to={`/waterSign/${waterSign._id}`}>
              <p>{waterSign.waterMessage}</p>
            </h1>
          </div>
        </div>
      ))}
  </div>
  )
  };

export default WaterSignList;