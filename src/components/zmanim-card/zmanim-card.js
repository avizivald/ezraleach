import React from 'react';

import './zmanim-card.styles.scss';

const ZmanimCard = (props) => (
  <div className="card">
    <div className="card__side card__side--front">

      <p className="card__heading1">{props.name}</p>
      <p className="card__heading2">{props.time}</p>

    </div>
    <div className="card__side card__side--back ">

      <p className="card__heading2">{props.name}</p>
      <p className="card__heading1">{props.time}</p>

    </div>
  </div>
);

export default ZmanimCard;