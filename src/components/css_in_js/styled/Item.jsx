import React from 'react';
import { WrappedItem, Cover, Name, Info, Btn } from './ItemStyles';


const Item = (props) => {
  const item = props.item;
  const tags = item.request.Filters.tags;
  let tagItems = tags ? tags.join(', ') : 'No tags...';

  return <WrappedItem photo={item.photo}>
      <Cover>
        <Name>{item.name}</Name>
        <Info>Group: {item.group}</Info>
        <Info>Slug: {item.slug}</Info>
        <Info>Tags: {tagItems}</Info>
        <Btn href={item.permalink} target="_blank">EXPLORE</Btn>
      </Cover>
    </WrappedItem>;
}

export default Item;