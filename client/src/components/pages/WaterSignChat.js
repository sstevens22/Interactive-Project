import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_WATERSIGN } from '../../utils/queries';

const WaterSignChat = props => {
  const { id: waterSignId } = useParams();

  const { loading, data } = useQuery(QUERY_WATERSIGN, {
    variables: { id: waterSignId }
  });

  const waterSign = data?.waterSign || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {waterSign.username}
          </span>{' '}
          Messaged chat at {waterSign.createdAt}
        </p>
        <div className="card-body">
          <p>{waterSign.waterMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default WaterSignChat;