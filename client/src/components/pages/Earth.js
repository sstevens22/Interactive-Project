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
    <main className= "cards-main-chat-format">
      <h1 className="chat-title">This is a special chat room made for Virgos, Taurus, and Capricorns!!</h1>
      <div>
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EarthSignList earthSigns={earthSigns}/>
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