import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_FIRESIGN } from '../../utils/queries';

const FireSignChat = props => {
  const { id: fireSignId } = useParams();

  const { loading, data } = useQuery(QUERY_FIRESIGN, {
    variables: { id: fireSignId }
  });

  const fireSign = data?.fireSign || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {fireSign.username}
          </span>{' '}
          Messaged chat at {fireSign.createdAt}
        </p>
        <div className="card-body">
          <p>{fireSign.fireMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default FireSignChat;