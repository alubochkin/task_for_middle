import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Flats from './components/Flats/Flats';
import Layout from './components/HOC/Layouts';
import flatsJSON from './entities.json';
import { getFlatsAc } from './redux/action';

const Wrapper = styled.div.attrs(() => ({
  className: 'wrapper',
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-content: center;
  padding-top: 30px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const flats = flatsJSON.response;
    dispatch(getFlatsAc(flats));
  }, [dispatch]);

  const flats = useSelector((state) => state.flats);

  return (
    <Layout>
      <Wrapper>
        <Flats flats={flats} />
      </Wrapper>
    </Layout>
  );
}

export default App;
