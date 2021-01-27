import React, { Component } from "react";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import Hidden from "@material-ui/core/Hidden";
// import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze';
var listDrawer = [
  {
    id: 1,
    name: "Home",
    to: "/",
    icon: "",
  },
  {
    id: 2,
    name: "Login",
    to: "/login",
    icon: "",
  },
];
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
  }
  toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({
      ...this.state,
      [anchor]: open,
    });
  };
  list = (anchor, classes) => (
    <Typography component="div"
      className={clsx(classes.list, {
        //clsx thay doi className
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        {listDrawer.map((data, key) => {
          return (
            <Link key={key} to={data.to} className={classes.buttonDrawer}>
              <ListItem button key={data.name}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemTextDrawer}
                  primary={data.name}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </Typography>
  );
  render() {
    const { classes } = this.props;
    return (
      <>
        <>
          <Typography className={classes.buttonMenuLeft}>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <>
                  <Tooltip title="Menu">
                  <DehazeIcon  onClick={this.toggleDrawer(anchor, true)}/>
                  </Tooltip>
                </>
                <SwipeableDrawer
                  anchor={anchor}
                  open={this.state[anchor]}
                  onClose={this.toggleDrawer(anchor, false)}
                  onOpen={this.toggleDrawer(anchor, true)}
                >
                  {this.list(anchor, classes)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </Typography>
        </>
      </>
    );
  }
}
export default withStyles(styles)(index);
