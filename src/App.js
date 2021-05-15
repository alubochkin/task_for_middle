import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Layout from "./components/HOC/Layouts";
import Slider from "./components/Slider";
import flatsJSON from './entities.json';
import { addLikeAc, getFlatsAc, removeLikeAc } from './redux/action';

const Wrapper = styled.div.attrs(() => ({
  className: "wrapper",
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-content: center;
  padding-top: 30px;
`;
const FlatCard = styled.div.attrs(() => ({
    className: "flat-card",
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

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const flats = flatsJSON.response;
    return dispatch(getFlatsAc(flats))
  }, [dispatch])

  const flats = useSelector(state => state.flats);
  const liked = useSelector(state => state.likes);


  const likeHendler = (id) => {
    if(liked.indexOf(id) === -1) {
      dispatch(addLikeAc(id))
    } else {
      dispatch(removeLikeAc(id))
    }
  }

  return (
    <Layout>
      <Wrapper>
        {flats?.map(flat => {
          return(
            <FlatCard
              key={flat.id}
              >
              <Slider images={flat.images} />

              <button 
                onClick={() => likeHendler(flat.id)}
                className="favorite">
                <i
                  style={liked?.some(el => el === flat.id) ? {color: '#1db4ff'} : null}                  
                  className="material-icons">favorite</i>
              </button>

              <h4 className='flat-card--title'>{flat.attributes.title}</h4>
          
              <div className='flat-card--attributes'>
                <p> Комнат: {flat.attributes.rooms}</p>
                <p>Площадь: {flat.attributes.area} <span> {flat.attributes.unit}</span></p>
              </div>

              <div className='flat-card--attributes'>
                <p>Город: {flat.attributes.address.city}</p>
                <p>
                  Улица {flat.attributes.address.street} &#160;
                  дом {flat.attributes.address.house} &#160;
                  квартира {flat.attributes.address.room}
                </p>
              </div>

              <div className='flat-card--relationships'>
                <p> Контактное лицо: {flat.relationships.type}</p>
                <p>ФИО: 
                  <span> {flat.relationships.attributes.first_name}</span>
                  <span> {flat.relationships.attributes.last_name}</span>
                  <span> {flat.relationships.attributes.middle_name}</span>
                </p>
              </div>
            </FlatCard>
          )
        })}
      </Wrapper>
    </Layout>
  );
}

export default App;
