import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  Card,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import uniqid from "uniqid";

import Spinner from "../../components/UI/Spinner/Spinner";
import ListItem from "../../components/ListItem/ListItem";

const styles = theme => ({
  container: {
    marginTop: "5rem",
    marginBottom: "16rem"
  },
  content: {
    textAlign: "center"
  },
  newItemCard: {
    margin: "1rem 0"
  },
  fixedContainer: {
    position: "fixed",
    bottom: "0",
    left: "0"
  },
  textField: {
    width: "70%"
  },
  button: {
    width: "160px"
  },
  pickerButton: {
    margin: "1rem 0 2rem"
  },
  pickedItemText: {
    padding: "1rem"
  },
  pickedItem: {
    padding: "1rem 0 0"
  },
  pickedContainer: {
    padding: "1rem 2rem"
  },
  hiddenIcon: {
    height: "24px",
    width: "24px"
  },
  pickedHeader: {
    padding: "0 1rem",
    alignItems: "center"
  }
});

class Picker extends Component {
  state = {
    items: [],
    picked: false,
    newItemValue: "",
    pickedItem: "",
    picking: false,
    dialogOpen: false
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

  handleClearAll = () => {
    this.setState(prevState => ({
      ...prevState,
      dialogOpen: true
    }));
  };

  handleModalClose = () => {
    this.setState(prevState => ({
      ...prevState,
      dialogOpen: false
    }));
  };

  confirmClearAll = () => {
    this.setState(prevState => ({
      ...prevState,
      items: [],
      dialogOpen: false
    }));
  };

  handleClosePicked = () => {
    this.setState(prevState => ({
      ...prevState,
      picked: false,
      pickedItem: ""
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
            {this.state.items.length > 4 && (
              <Grid item xs={12}>
                <Button variant="outlined" onClick={this.handleClearAll}>
                  <Typography variant="button">Clear All</Typography>
                </Button>
              </Grid>
            )}
          </Grid>
          <Dialog
            open={this.state.dialogOpen}
            onClose={this.handleModalClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Confirm Clear All"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to clear all the items in the list?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleModalClose} color="primary">
                No
              </Button>
              <Button onClick={this.confirmClearAll} color="primary">
                Yes, Clear All
              </Button>
            </DialogActions>
          </Dialog>
          <Grid container className={classes.fixedContainer}>
            {this.state.pickedItem !== "" && (
              <Grid item xs={12} className={classes.pickedContainer}>
                <Card className={classes.pickedItem}>
                  <Grid
                    container
                    justify="space-between"
                    className={classes.pickedHeader}
                  >
                    <Grid item>
                      <div className={classes.hiddenIcon} />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">Picked Item</Typography>
                    </Grid>
                    <Grid item>
                      <CloseIcon
                        className={classes.closeIcon}
                        onClick={this.handleClosePicked}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    className={classes.pickedItemText}
                    variant="title"
                  >
                    {this.state.pickedItem}
                  </Typography>
                </Card>
              </Grid>
            )}

            {this.state.pickedItem ? (
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} className={classes.pickerButton}>
                    <Button
                      variant="extendedFab"
                      color="primary"
                      onClick={this.pickItem}
                      className={classes.button}
                    >
                      <Typography variant="button" color="inherit">
                        Pick1 Again
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12} className={classes.pickerButton}>
                <Button
                  variant="extendedFab"
                  color="primary"
                  onClick={this.pickItem}
                  className={classes.button}
                >
                  <Typography variant="button" color="inherit">
                    Pick1
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
