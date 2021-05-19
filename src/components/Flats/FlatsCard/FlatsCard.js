import React from 'react';
import styled from 'styled-components';
import Slider from '../../Slider';

const FlatCard = styled.div.attrs(() => ({
  className: 'flat-card',
}))`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px #00000052;
  color: #e6e6f6;
  background: #ffffff14;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

export default function FlatsCard({
  flat,
  likeHendler,
  likes,
}) {
  return (
    <FlatCard>
      <Slider images={flat.images} />
      <button
        type='button'
        onClick={() => likeHendler(flat.id)}
        className='favorite'
      >
        <i
          style={
            likes?.some((el) => el === flat.id)
              ? { color: '#1db4ff' }
              : null
          }
          className='material-icons'
        >
          favorite
        </i>
      </button>

      <h4 className='flat-card--title'>
        {flat.attributes.title}
      </h4>

      <div
        className='flat-card--attributes'
      >
        <p>{`Комнат: ${flat.attributes.rooms}`}</p>
        <p>{`Площадь: ${flat.attributes.area} ${flat.attributes.unit}`}</p>
      </div>

      <div
        className='flat-card--attributes'
      >
        <p>{`Город: ${flat.attributes.address.city}`}</p>
        <p>{`Улица: ${flat.attributes.address.street}`}</p>
        <p>{`дом: ${flat.attributes.address.house}`}</p>
        <p>{`квартира: ${flat.attributes.address.room}`}</p>
      </div>

      <div
        className='flat-card--relationships'
      >
        <p>{`Контактное лицо: ${flat.relationships.type}`}</p>

        <p>
          {`
            ФИО: 
            ${flat.relationships.attributes.first_name} 
            ${flat.relationships.attributes.middle_name} 
            ${flat.relationships.attributes.last_name}         
          `}
        </p>

      </div>
    </FlatCard>
  );
}
