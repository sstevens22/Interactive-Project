import React from 'react';
import { Link } from 'react-router-dom';

const AirSignList = ({ airSigns, title }) => {
  if (!airSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {airSigns &&
        airSigns.map(airSign => (
          <div key={airSign._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${airSign.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {airSign.username}
              </Link>{' '}
              The following Messages {airSign.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/airSign/${airSign._id}`}>
                <p>{airSign.airMessage}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AirSignList;