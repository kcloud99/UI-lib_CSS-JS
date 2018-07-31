import React from "react";
import { Label, Image, Panel, PageHeader, Col } from 'react-bootstrap';

const Item = (props) => {
  const item = props.item;
  const tags = item.request.Filters.tags || [];
  const pic = item.photo;

  return <Col xs={12} md={4}>
      <div style={{width: '30vw', height: '20vh', padding: '5px', marginTop: '30vh'}}>
      <PageHeader>{item.name}</PageHeader>
      <Image src={pic} responsive/>
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
      </div>
    </Col>;
}

export default Item;

const handleClick = () => alert('You clicked me');