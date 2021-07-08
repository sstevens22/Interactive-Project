import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <h1>Check us out!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/zodiacback2.jpg'
                text='Are you a Water Sign? Join your fellow Water signs for a chat!'
                label='Water Chat'
                path='/water'
              />
              <CardItem
                src='images/zodiacback3.jpg'
                text='Are you an Earth Sign? Join your fellow Earth signs for a chat!'
                label='Earth Chat'
                path='/earth'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/zodiacback4.jpg'
                text='Are you an Air Sign? Join your fellow Air signs for a chat!'
                label='Air Chat'
                path='/air'
              />
              <CardItem
                src='images/zodiacback5.jpg'
                text='Are you a Fire Sign? Join your fellow Fire signs for a chat!'
                label='Fire Chat'
                path='/fire'
              />
              <CardItem
                src='images/zodiacback6.jpg'
                text='Become a member, get your tarot card readings and horoscope'
                label='Join us!!'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;
