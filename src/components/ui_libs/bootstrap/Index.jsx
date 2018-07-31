import React, { Fragment } from "react";
import Item from "./Item.jsx";
import { Grid, Row } from "react-bootstrap";

const Bootstrap = ({ items }) => {
  console.log("🌴🌏", items);
  
  return <Grid>
      <Row className="show-grid">
        {items.map(item => {
          return <Item item={item} key={item.name} />;
        })}
      </Row>
    </Grid>;
};

export default Bootstrap;
