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
import { Link } from "react-router-dom";

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
  },
  sideDrawerLink: {
    textDecoration: "none"
  },
  logo: {
    fontWeight: "700"
  }
});

class Layout extends Component {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({
      drawerOpen: !state.drawerOpen
    }));
  };

  closeDrawer = () => {
    this.setState(state => ({
      drawerOpen: false
    }));
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <Divider />
        <List>
          <ListItem button>
            <Link
              to="/"
              onClick={this.closeDrawer}
              className={classes.sideDrawerLink}
            >
              <ListItemText primary="Picker" />
            </Link>
          </ListItem>
          {/* <ListItem button>
            <Link to="/couples" onClick={this.closeDrawer} className={classes.sideDrawerLink}>
              <ListItemText primary="Couple's Mode" />
            </Link>
          </ListItem> */}
          <ListItem button>
            <Link
              to="/toss"
              onClick={this.closeDrawer}
              className={classes.sideDrawerLink}
            >
              <ListItemText primary="Toss" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <Link
              to="/about"
              onClick={this.closeDrawer}
              className={classes.sideDrawerLink}
            >
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              to="/help"
              onClick={this.closeDrawer}
              className={classes.sideDrawerLink}
            >
              <ListItemText primary="Help" />
            </Link>
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
            <Typography
              variant="headline"
              color="inherit"
              className={classes.logo}
            >
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
