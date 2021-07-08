import React from 'react';
import { Link } from 'react-router-dom';

const WaterSignList = ({ waterSigns, title }) => {
  if (!waterSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {waterSigns &&
        waterSigns.map(waterSign => (
          <div key={waterSign._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${waterSign.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {waterSign.username}
              </Link>{' '}
              The following Messages {waterSign.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/waterSign/${waterSign._id}`}>
                <p>{waterSign.waterMessage}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WaterSignList;