import React, { Fragment } from 'react';
import styled from 'styled-components';
import Item from './Item';

const List = ({items}) => {
  console.log('🌴🌏', items);
  return <Fragment>
    {
      items.map(item => {
        return <Item item={item} key={item.name} />;
      })
    }
    </Fragment>;
}

export default List;