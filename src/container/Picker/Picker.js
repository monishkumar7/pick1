import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Card, TextField } from "@material-ui/core";
import Spinner from "../../components/UI/Spinner/Spinner";

const styles = {
  container: {
    marginTop: "5rem"
  },
  content: {
    textAlign: "center"
  },
  pickedItemCard: {
    padding: "1rem",
    margin: "3rem 2rem"
  },
  listItemCard: {
    padding: "1rem",
    margin: ".1rem 2rem"
  },
  newItemCard: {
    padding: "1rem",
    margin: "2rem"
  }
};

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
        id: prevState.items.length + 1,
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

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.container} container justify="center">
        <Grid item xs={12} md={8} className={classes.content}>
          <Grid container>
            {this.state.picking && (
              <Grid item xs={12}>
                <Card className={classes.pickedItemCard}>
                  <Spinner />
                </Card>
              </Grid>
            )}
            {this.state.items.length > 0 &&
              this.state.items.map(item => (
                <Grid item xs={12} key={item.id}>
                  <Card className={classes.listItemCard}>
                    <Typography variant="body1">{item.text}</Typography>
                  </Card>
                </Grid>
              ))}
            <Grid item xs={12}>
              <Card className={classes.newItemCard}>
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
              </Card>
            </Grid>
            {this.state.pickedItem ? (
              <Fragment>
                <Grid item xs={6}>
                  <Card className={classes.pickedItemCard}>
                    <Typography variant="body2">
                      Picked Item - {this.state.pickedItem}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.pickItem}
                  >
                    <Typography variant="button" color="inherit">
                      Pick Again
                    </Typography>
                  </Button>
                </Grid>
              </Fragment>
            ) : (
              <Grid item xs={12}>
                <Button
                  variant="contained"
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
