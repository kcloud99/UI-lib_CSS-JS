import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

const Item = (props) => {
  const item = props.item;
  const tags = item.request.Filters.tags || [];
  const pic = item.photo;

  return <Grid.Column>
      <Card fluid color="green" style={{width: '90vw'}}>
        <Image src={pic} size="tiny" />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>
            <span className="date">{item.slug}</span>
          </Card.Meta>
          <Card.Description>
            {item.group}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {tags.map(tag => {
          return <a>
              <Icon name="tags" />
              `{tag} `
            </a>;
          })}
        </Card.Content>
      </Card>
    </Grid.Column>;
}

export default Item;
