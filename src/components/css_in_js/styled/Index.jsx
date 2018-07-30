import React, { Fragment } from 'react';
import Item from './Item.jsx';
import { Wrapper } from './ItemStyles.jsx';

const Styled = ({ items }) => {
  console.log('🌴🌏', items);
  return(
    <Wrapper>
      {
        items.map(item => {
          return <Item item={item} key={item.name} />;
        })
      }
    </Wrapper>
  );
}

export default Styled;