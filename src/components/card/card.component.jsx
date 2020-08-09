import React from 'react';

import './card.styles.css';

export const Card = ({ monster }) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>{monster.name}</h2>
    <h3>{monster.email}</h3>
  </div>
);
