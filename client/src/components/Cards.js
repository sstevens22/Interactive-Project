import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <h1>Check these out!</h1>
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
                text='Learn about your personal sun sign'
                label='Mystery'
                path='/horoscope'
              />
              <CardItem
                src='images/zodiacback5.jpg'
                text='Check out the mechanics of Tarot card reading'
                label='Exploration'
                path='/tarot'
              />
              <CardItem
                src='images/zodiacback6.jpg'
                text='Become a member and get your own personalized tarot card readings and explore your horoscope'
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
