import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [interest,setInterest] =useState(false)
  const [readMore,setReadMore]= useState(true)
  function interestHandleClick(){
    setInterest(!interest)
  }
  function readMoreHandleClick(){
    setReadMore(!readMore)
  }
  return <article className='single-tour' >
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
      </div>
     {readMore?info:<p >{info.substring(0,200)}</p>}
     <button onClick={readMoreHandleClick}>
      {readMore?'show less':'read more'}
     </button>
      <button className='delete-btn' onClick={()=>removeTour(id)}>{interest?'not interested':"interest"}</button>
    </footer>
  </article>
};

export default Tour;
