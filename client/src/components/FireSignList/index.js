import React from 'react';
import { Link } from 'react-router-dom';

const FireSignList = ({ fireSigns, title }) => {
  if (!fireSigns.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {fireSigns &&
        fireSigns.map(fireSign => (
          <div key={fireSign._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${fireSign.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {fireSign.username}
              </Link>{' '}
              The following Messages {fireSign.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/fireSign/${fireSign._id}`}>
                <p>{fireSign.fireMessage}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FireSignList;