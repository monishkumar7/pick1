import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Card, TextField } from "@material-ui/core";

const styles = {
  container: {
    marginTop: "5rem"
  },
  content: {
    textAlign: "center"
  }
};

class Picker extends Component {
  state = {
    items: [],
    picked: false,
    newItemValue: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      items: prevState.items.concat(prevState.newItemValue),
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

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.container} container justify="center">
        <Grid item xs={12} md={8} className={classes.content}>
          <Grid container>
            {this.state.items.length > 0 &&
              this.state.items.map(item => (
                <Grid item xs={12} key={item}>
                  <Card>
                    <Typography variant="body1">{item}</Typography>
                  </Card>
                </Grid>
              ))}
            <Grid item xs={12}>
              <Card>
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
            <Grid item xs={12}>
              <Button variant="contained" color="secondary">
                <Typography variant="button" color="inherit">
                  Pick Item
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Picker);
