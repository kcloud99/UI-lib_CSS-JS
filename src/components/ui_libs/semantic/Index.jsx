import React, { Fragment } from 'react';
import Item from './Item.jsx';

const Semantic = ({ items }) => {
  console.log('🌴🌏', items);
  return (
    <Fragment>
      {
        items.map(item => {
          return <Item item={item} key={item.name} />;
        })
      }
    </Fragment>
  );
}

export default Semantic;