import React, { Fragment } from "react";
import Item from "./Item.jsx";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1,
  }
}

const Material = (props) => {
  const items = props.items;
  console.log("🌴🌏", items);
  const { classes } = props;
  return <div className={classes.root}>
      <Grid container spacing={24}>
        {items.map(item => {
          return <Item item={item} key={item.name} />;
        })}
      </Grid>
    </div>;
};

export default withStyles(styles)(Material);
