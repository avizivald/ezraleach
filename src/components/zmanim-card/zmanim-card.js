import React from 'react';

import './zmanim-card.styles.scss';
import AnimateEarth from '../../pages/Animate/AnimateEarth';

const ZmanimCard = (props) => (
  <div className="card">
    <div className="card__side card__side--front">

      <p className="card__heading1">{props.name}</p>
      <p className="card__heading2">{props.time}</p>

    </div>
    <div className="card__side card__side--back ">
      <div className='AnimateEarthBox'>
        <AnimateEarth />
      </div>
      <p className="card__heading2">{props.name}</p>
      <p className="card__heading1">{props.time}</p>

    </div>
  </div>
);

export default ZmanimCard;