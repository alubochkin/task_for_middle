import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLikeAc,
  removeLikeAc,
} from '../../redux/action';
import FlatsCard from './FlatsCard/FlatsCard';

export default function Flats({ flats }) {
  const { likes } = useSelector((state) => state);
  const dispatch = useDispatch();

  const likeHendler = (id) => {
    if (likes.indexOf(id) === -1) {
      dispatch(addLikeAc(id));
    } else {
      dispatch(removeLikeAc(id));
    }
  };

  return (
    <>
      {flats?.map((flat) => (
        <FlatsCard
          flat={flat}
          key={flat.id}
          likeHendler={likeHendler}
          likes={likes}
        />
      ))}
    </>
  );
}
