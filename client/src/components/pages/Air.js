import React from 'react';
import AirSignList from '../AirSignList';
import AirSignForm from '../AirSignForm';
import '../Cards.css';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_AIRSIGN } from '../../utils/queries';

const Air = () => {
  const { loading, data } = useQuery(QUERY_AIRSIGN);
  const airSigns = data?.airSigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className="cards">
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AirSignList airSigns={airSigns} title="Get to know your fellow air Signs!" />
          )}
        </div>
        {loggedIn && (
          <div className="textarea-format">
            <AirSignForm />
          </div>
        )}
      </div>
    </main>
  );
};

export default Air;