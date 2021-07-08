import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_AIRSIGN } from '../../utils/queries';

const AirSignChat = props => {
  const { id: airSignId } = useParams();

  const { loading, data } = useQuery(QUERY_AIRSIGN, {
    variables: { id: airSignId }
  });

  const airSign = data?.airSign || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {airSign.username}
          </span>{' '}
          Messaged chat at {airSign.createdAt}
        </p>
        <div className="card-body">
          <p>{airSign.airMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default AirSignChat;