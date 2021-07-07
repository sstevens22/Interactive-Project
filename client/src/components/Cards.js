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
                text='Receive your very own tarot card reading'
                label='Divination'
                path='/tarot'
              />
              <CardItem
                src='images/zodiacback3.jpg'
                text='Get an in-depth look at your own personal zodiac sign'
                label='Self Discovery'
                path='/horoscope'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/zodiacback4.jpg'
                text='Discover your own personal sun sign and its meaning'
                label='Mystery'
                path='/horoscope'
              />
              <CardItem
                src='images/zodiacback5.jpg'
                text='Check out the mechanics of tarot card reading, learn your future'
                label='Exploration'
                path='/tarot'
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
