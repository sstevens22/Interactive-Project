import React from 'react';
import EarthSignList from '../EarthSignList';
import EarthSignForm from '../EarthSignForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_EARTHSIGN } from '../../utils/queries';

const Earth = () => {
  const { loading, data } = useQuery(QUERY_EARTHSIGN);
  const earthSigns = data?.earthSigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <EarthSignForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EarthSignList earthSigns={earthSigns} title="Get to know your fellow earth Signs!" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Earth;