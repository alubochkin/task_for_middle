import React, { useState } from 'react';

export default function Slider(props) {

  const [move, setMove] = useState(0);

  
  const length = props.images.length;


  const moveLeftHendler = () => {
    if(-length !== move - 1) {
      setMove(prev => prev += -1)
    }
  }

  const moveRightHendler = () => {
    if(move !== 0) {
      setMove(prev => prev += 1)
    }

  }

  const stiles = {
    color: 'red',
    transform: `translate( ${move * 100}% )`,
  }


  return (
    <div className='slider'>
      <div className='slider--btn'>
        <span onClick={moveLeftHendler}> {'<'} </span>
        <span onClick={moveRightHendler}> {'>'} </span>
      </div>
      <div 
        style={stiles}
        className='slider--wrappImage'
      >
        {
          props.images.map((image, index) => {
            return (
              <img 
                alt='' 
                key={index} 
                src={image} />
            )
          
          })
        }
      </div>
    </div>
  )
}

