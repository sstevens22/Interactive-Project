import React from 'react';
import { Link } from 'react-router-dom';

const EarthSignList = ({ earthSigns, title }) => {
  if (!earthSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {earthSigns &&
        earthSigns.map(earthSign => (
          <div key={earthSign._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${earthSign.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {earthSign.username}
              </Link>{' '}
              The following Messages {earthSign.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/earthSign/${earthSign._id}`}>
                <p>{earthSign.earthMessage}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EarthSignList;