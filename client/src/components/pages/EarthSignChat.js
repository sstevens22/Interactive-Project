import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_EARTHSIGN } from '../../utils/queries';

const EarthSignChat = props => {
  const { id: earthSignId } = useParams();

  const { loading, data } = useQuery(QUERY_EARTHSIGN, {
    variables: { id: earthSignId }
  });

  const earthSign = data?.earthSign || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {earthSign.username}
          </span>{' '}
          Messaged chat at {earthSign.createdAt}
        </p>
        <div className="card-body">
          <p>{earthSign.earthMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default EarthSignChat;