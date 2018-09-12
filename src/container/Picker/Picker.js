import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Card, TextField } from "@material-ui/core";
import uniqid from "uniqid";

import Spinner from "../../components/UI/Spinner/Spinner";
import ListItem from "../../components/ListItem/ListItem";

const styles = theme => ({
  container: {
    marginTop: "5rem",
    marginBottom: "20rem"
  },
  content: {
    textAlign: "center"
  },
  pickedItem: {
    margin: "2rem 0 0"
  },
  newItemCard: {
    margin: "1rem 0"
  },
  fixedContainer: {
    background: "white",
    position: "fixed",
    bottom: "0",
    left: "0",
    boxShadow: "0 -1px 5px #ddd"
  },
  textField: {
    width: "70%"
  },
  pickerButton: {
    margin: "1rem 0 2rem"
  },
  pickedItemText: {
    padding: "1rem"
  }
});

class Picker extends Component {
  state = {
    items: [],
    picked: false,
    newItemValue: "",
    pickedItem: "",
    picking: false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      items: prevState.items.concat({
        id: uniqid(),
        text: prevState.newItemValue
      }),
      newItemValue: ""
    }));
  };

  inputChangeHandler = event => {
    const text = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      newItemValue: text
    }));
  };

  pickItem = () => {
    this.setState(prevState => ({
      ...prevState,
      picking: true
    }));
    let pickedNumber = null;
    while (pickedNumber === null) {
      let randNumber = Math.floor(10 * Math.random());
      if (randNumber < this.state.items.length) pickedNumber = randNumber;
    }
    this.setState(prevState => ({
      ...prevState,
      pickedItem: prevState.items[pickedNumber].text,
      picked: true,
      picking: false
    }));
  };

  deleteItem = id => {
    let updatedItemsArray = [];
    for (let item of this.state.items) {
      if (item.id !== id) updatedItemsArray = updatedItemsArray.concat(item);
    }
    this.setState(prevState => ({
      ...prevState,
      items: updatedItemsArray
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.container} container justify="center">
        <Grid item xs={12} md={8} className={classes.content}>
          <Grid container>
            {this.state.picking && (
              <Grid item xs={12}>
                <Card>
                  <Spinner />
                </Card>
              </Grid>
            )}
            {this.state.items.length > 0 && (
              <Grid item xs={12}>
                {this.state.items.map(item => (
                  <ListItem
                    text={item.text}
                    key={item.id}
                    deleteItem={id => {
                      this.deleteItem(item.id);
                    }}
                  />
                ))}
              </Grid>
            )}
          </Grid>
          <Grid container className={classes.fixedContainer}>
            {this.state.pickedItem !== "" && (
              <Grid item xs={12} className={classes.pickedItem}>
                <Typography variant="caption">Picked Item</Typography>
                <Typography className={classes.pickedItemText} variant="title">
                  {this.state.pickedItem}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} className={classes.newItemCard}>
              <form onSubmit={event => this.handleFormSubmit(event)}>
                <TextField
                  label="Add New Item"
                  placeholder="Enter New Item"
                  className={classes.textField}
                  value={this.state.newItemValue}
                  margin="normal"
                  onChange={event => this.inputChangeHandler(event)}
                />
              </form>
            </Grid>
            {this.state.pickedItem ? (
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} className={classes.pickerButton}>
                    <Button
                      variant="extendedFab"
                      color="secondary"
                      onClick={this.pickItem}
                    >
                      <Typography variant="button" color="inherit">
                        Pick Again
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12} className={classes.pickerButton}>
                <Button
                  variant="extendedFab"
                  color="secondary"
                  onClick={this.pickItem}
                >
                  <Typography variant="button" color="inherit">
                    Pick Item
                  </Typography>
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Picker);
