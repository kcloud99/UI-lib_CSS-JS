import React from "react";
import { Label, Image, Panel, PageHeader } from 'react-bootstrap';

const Item = (props) => {
  const item = props.item;
  const tags = item.request.Filters.tags || [];
  const pic = item.photo;

  return <div>
      <PageHeader>{item.name}</PageHeader>
      <Image src={pic} />
      <Panel onClick={handleClick}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Tags</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {tags.map(tag => {
            return (
              <h5>
                <Label>{tag}</Label>
              </h5>
            )
          })}
        </Panel.Body>
      </Panel>
    </div>;
}

export default Item;

const handleClick = () => alert('You clicked me');