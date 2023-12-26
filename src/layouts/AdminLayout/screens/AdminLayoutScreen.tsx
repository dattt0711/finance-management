import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "../components/Drawer";
import { Anchor } from "../interfaces";
export default function AdminLayoutScreen() {
  const classes = useStyles();
  const [anchorState, setAnchorState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchor, setAnchor] = React.useState("left");
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setAnchorState({ ...anchorState, [anchor]: open });
      setAnchor(anchor);
    };

  return (
    <Box>
      <Box className={classes.header}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyJTIwcm9ib3R8ZW58MHx8MHx8fDA%3D"
        />
      </Box>
      <Drawer anchor={anchor} anchorState={anchorState} />
    </Box>
  );
}
