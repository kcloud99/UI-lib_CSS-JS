import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Item = (props) => {
  const item = props.item;
  const tags = item.request.Filters.tags || [];
  const pic = item.photo;

  return <Card>
      <Image src={pic} />
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>;
}

export default Item;
