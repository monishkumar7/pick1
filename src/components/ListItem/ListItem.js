import React from "react";
import { Grid, Card, withStyles, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  listItemCard: {
    textAlign: "left",
    padding: "1rem",
    margin: "1rem 2rem"
  },
  iconContainer: {
    textAlign: "right",
    color: "#ddd"
  }
};

const listItem = props => (
  <Card className={props.classes.listItemCard}>
    <Grid container>
      <Grid item xs={10}>
        <Typography variant="subheading">{props.text}</Typography>
      </Grid>
      <Grid
        item
        xs={2}
        className={props.classes.iconContainer}
        onClick={props.deleteItem}
      >
        <DeleteIcon />
      </Grid>
    </Grid>
  </Card>
);

export default withStyles(styles)(listItem);
