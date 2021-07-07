import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Type from './Type';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>DESTINATION OF FATE</h1>
            <p> What are you waiting for?</p>
            <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'> GET STARTED</Button>
            </div>
            
        </div>
    )
}

export default HeroSection
