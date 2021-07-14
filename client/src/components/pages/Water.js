import React from 'react';
import WaterSignList from '../WaterSignList';
import WaterSignForm from '../WaterSignForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WATERSIGN } from '../../utils/queries';

const Water = () => {
  const { loading, data } = useQuery(QUERY_WATERSIGN);
  const waterSigns = data?.waterSigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WaterSignList waterSigns={waterSigns} title="Get to know your fellow water Signs!" />
          )}
        </div>
        {loggedIn && (
          <div className="textarea-format">
            <WaterSignForm />
          </div>
        )}
      </div>
    </main>
  );
};

export default Water;