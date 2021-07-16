import React from 'react';
import WaterSignList from '../WaterSignList';
import WaterSignForm from '../WaterSignForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WATERSIGN } from '../../utils/queries';
import '../Cards.css';


const Water = () => {
  const { loading, data } = useQuery(QUERY_WATERSIGN);
  const waterSigns = data?.waterSigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className= "cards-main-chat-format">
      <h1 className="chat-title">This is a special chat room made for Cancers, Scorpios, and Pisces!!</h1>
      <div>
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WaterSignList waterSigns={waterSigns} />
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