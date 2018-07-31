import React, { Fragment } from 'react';
import Item from './Item.jsx';
import { css } from 'emotion';

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Emotion = ({ items }) => {
  console.log('🌴🌏', items);
  return (
    <div className={wrapper}>
      {
        items.map(item => {
          return <Item item={item} key={item.name} />;
        })
      }
    </div>
  );
}

export default Emotion;
