import React from 'react';
import FireSignList from '../FireSignList';
import FireSignForm from '../FireSignForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_FIRESIGN } from '../../utils/queries';

const Fire = () => {
  const { loading, data } = useQuery(QUERY_FIRESIGN);
  const fireSigns = data?.fireSigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <FireSignForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FireSignList fireSigns={fireSigns} title="Get to know your fellow fire Signs!" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Fire;