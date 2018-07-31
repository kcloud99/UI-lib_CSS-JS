import React from 'react';
// import { WrappedItem, Cover, Name, Info, Btn } from './ItemStyles.jsx';
import styled, { css } from 'react-emotion';

const Cover = styled("div")`
  background-color: rgba(0, 0, 0, 0.5);
  ${'' /* width: 100%;
  height: 100%; */}
`;

const Wrap = styled("div")`
  background-image: url(${props => props.photo});
  width: 30vw;
  height: 30vh;
  margin: auto;
  background-size: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35), 0 2px 4px rgba(0, 0, 0, 0.24);
  ${'' /* ${Cover} {
    width: 100%;
    height: 100%;
  } */}
`;

// const Cover = styled("div")`
//   background-color: rgba(0, 0, 0, 0.5);
//   width: 100%;
//   height: 100%;
// `;

const Title = styled('h2')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Info = styled("h4")`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;


const Item = (props) => {
  const item = props.item;
  const tags = item.request.Filters.tags;
  let tagItems = tags ? tags.join(', ') : 'No tags...';

  return <Wrap photo={item.photo}>
      <Cover>
        <Title>{item.name}</Title>
        <Info>Tags: {tagItems}</Info>
      </Cover>
    </Wrap>;
}

export default Item;