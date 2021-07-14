import React from 'react';
import EarthSignList from '../EarthSignList';
import EarthSignForm from '../EarthSignForm';
import '../Cards.css';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_EARTHSIGN } from '../../utils/queries';

const Earth = () => {
  const { loading, data } = useQuery(QUERY_EARTHSIGN);
  const earthSigns = data?.earthSigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className="cards">
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EarthSignList earthSigns={earthSigns} title="Get to know your fellow earth Signs!" />
          )}
        </div>
        {loggedIn && (
          <div className="textarea-format">
            <EarthSignForm />
          </div>
        )}
      </div>
    </main>
  );
};

export default Earth;