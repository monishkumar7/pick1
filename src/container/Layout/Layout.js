import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const style = theme => ({
  drawerPaper: {
    width: 240
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  hiddenIcon: {
    height: "48px",
    width: "48px"
  },
  appBar: {
    boxShadow: "0 1px 5px #ddd"
  }
});

class Layout extends Component {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen
    }));
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Basic" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Couple's Mode" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Toss" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <AppBar className={classes.appBar} color="inherit">
          <Toolbar className={classes.toolbar} position="static">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="headline" color="inherit">
              pick1
            </Typography>
            <div className={classes.hiddenIcon} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={this.state.drawerOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
