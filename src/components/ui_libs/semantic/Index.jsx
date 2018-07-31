import React, { Fragment } from 'react';
import Item from './Item.jsx';
import { Grid } from 'semantic-ui-react';

const Semantic = ({ items }) => {
  console.log('🌴🌏', items);
  return <Grid columns={3} divided>
      <Grid.Row>
        {items.map(item => {
          return <Item item={item} key={item.name} />;
        })}
      </Grid.Row>
    </Grid>;
}

export default Semantic;