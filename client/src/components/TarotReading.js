import React from 'react'

export default function TarotReading({result}) {
  return (
    <div className="tarot-drawing">
      <h2>Name: {result.name}</h2>
      <p>Type: {result.type}</p>
      <p>Description: {result.desc}</p>
      <p>Meaning: {result.meaning_up}</p>
      <p>Meaning Reversed: {result.meaning_rev}</p>
    </div>
  )
}
