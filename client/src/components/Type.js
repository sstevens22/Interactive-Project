import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tarot Readings",
          "Past, Present, and Future",
          "Daily Horoscope",
          "Discover Your Zodiac Sign",
          "Share Your Fate",
          "Connect With Others",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;