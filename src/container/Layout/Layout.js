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
  Drawer,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const style = theme => ({
  drawerPaper: {
    width: 240,
    padding: "1rem 0"
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
        <Grid container justify="center">
          <Grid item>
            <Typography
              variant="headline"
              color="inherit"
              className={classes.logo}
            >
              pick1
            </Typography>
          </Grid>
        </Grid>
        <List>
          <Link
            to="/"
            onClick={this.closeDrawer}
            className={classes.sideDrawerLink}
          >
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          {/*<Link to="/couples" onClick={this.closeDrawer} className={classes.sideDrawerLink}>
           <ListItem button>
              <ListItemText primary="Couple's Mode" />
              </ListItem> 
            </Link>*/}
          <Link
            to="/toss"
            onClick={this.closeDrawer}
            className={classes.sideDrawerLink}
          >
            <ListItem button>
              <ListItemText primary="Coin Toss" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link
            to="/about"
            onClick={this.closeDrawer}
            className={classes.sideDrawerLink}
          >
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link
            to="/help"
            onClick={this.closeDrawer}
            className={classes.sideDrawerLink}
          >
            <ListItem button>
              <ListItemText primary="Help" />
            </ListItem>
          </Link>
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
