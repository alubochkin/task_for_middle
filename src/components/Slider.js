/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';

export default function Slider({ images }) {
  const [move, setMove] = useState(0);

  const length = images.length;

  const buttonRightHandler = () => {
    if (-length !== move - 1) {
      setMove((prev) => -1 + prev);
    }
  };

  const buttonLeftHandler = () => {
    if (move !== 0) {
      setMove((prev) => 1 + prev);
    }
  };

  const stiles = {
    color: 'red',
    transform: `translate( ${move * 100}% )`,
  };

  return (
    <div className='slider'>
      <div className='slider--btn'>
        <button type='button' onClick={buttonLeftHandler}>
          {'<'}
        </button>
        <button type='button' onClick={buttonRightHandler}>
          {'>'}
        </button>
      </div>
      <div style={stiles} className='slider--wrappImage'>
        {images.map((image, index) => (
          <img alt='' key={index} src={image} />
        ))}
      </div>
    </div>
  );
}
