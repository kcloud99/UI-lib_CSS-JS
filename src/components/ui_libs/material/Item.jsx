import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    maxWidth: "30vw",
    marginTop: 10,
    margin: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: 8,
  }
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { chipData: this.props.item.request.Filters.tags || [] };
  }

  // componentDidMount() {
  //   this.setState({chipData: this.props.item.request.Filters.tags})
  // }

  render() {
    const item = this.props.item;
    // const tags = item.request.Filters.tags || [];
    const pic = item.photo;
    const { classes } = this.props;

    return <Grid item xs={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={pic}
            title="Name"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1">
              {item.name}
            </Typography>
            <Paper className={classes.root}>
              {this.state.chipData.map(tag => {
                return (
                  <Chip
                    key={tag}
                    label={tag}
                    className={classes.chip}
                  />
                );
              })}
            </Paper>
          </CardContent>
        </Card>
      </Grid>;
  }
}

export default withStyles(styles)(Item);