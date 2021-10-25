import React from 'react';

import './zmanim-card.styles.scss';

const ZmanimCard = (props) => (
  <div className="card">
  <div className="card__side card__side--front">
      
       <h4 className="card__heading">
           <span >{props.name}</span>
       </h4>
      
  </div>
  <div className="card__side card__side--back ">
       
               <p className="card__heading">{props.time}</p>
              
   </div>
</div>
);

export default ZmanimCard;