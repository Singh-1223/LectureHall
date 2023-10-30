import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Link,
  Button,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/actions/users";
import HelpIcon from "@mui/icons-material/Help";

const NavBar = () => {
  const [anchor, setAnchor] = useState(null);
  const dispatcher = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const isSuper = useSelector(
    (state) =>
      state.users.isAdmin1 ||
      state.users.isAdmin2 ||
      state.users.isAdmin3 ||
      state.users.isSuperAdmin
  );

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <AppBar position="sticky" sx={{ mb: "10px" }}>
      <Toolbar sx={{ marginY: 1 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link
            underline="none"
            style={{ color: "white", fontWeight: "bold" }}
            sx={{
              textDecoration: "none",
              ":hover": {
                underline: "none",
                textDecoration: "none",
                color: "white",
              },
            }}
            href={"/"}
          >
            LT-Manager
          </Link>
        </Typography>
        <Box sx={{ flex: 1 }} />
        {loggedIn ? (
          <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
            <Avatar />
          </IconButton>
        ) : (
          <>
            <Button variant="contained" color="success">
              <Link
                href={"/login"}
                underline={"none"}
                style={{
                  color: "white",
                }}
                sx={{
                  color: "white",
                  ":hover": {
                    color: "white",
                    textDecoration: "none",
                    bgcolor: "transparent",
                  },
                }}
              >
                Login
              </Link>
            </Button>
          </>
        )}
        <Tooltip title={"Help"} sx={{ mx: "10px" }}>
          <Link
            href={"/help"}
            underline={"none"}
            sx={{
              color: "black",
              ":hover": {
                color: "black",
                textDecoration: "none",
                bgcolor: "transparent",
              },
            }}
          >
            <IconButton>
              <HelpIcon
                sx={{
                  color: "#ffffff",
                }}
              />
            </IconButton>
          </Link>
        </Tooltip>
        <Menu
          id="menu-appbar"
          anchorEl={anchor}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchor)}
          onClose={handleClose}
        >
          {isSuper && (
            [
              <MenuItem key={1}>
                <Link
                  href={"/pending"}
                  underline={"none"}
                  sx={{
                    color: "black",
                    ":hover": {
                      color: "black",
                      textDecoration: "none",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  Pending Requests
                </Link>
              </MenuItem>,

              <MenuItem key={2}>
                <Link
                  href={"/register"}
                  underline={"none"}
                  sx={{
                    color: "black",
                    ":hover": {
                      color: "black",
                      textDecoration: "none",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  Add User
                </Link>
              </MenuItem>,

              <MenuItem key={3}>
                <Link
                  href={"/deleteUser"}
                  underline={"none"}
                  sx={{
                    color: "black",
                    ":hover": {
                      color: "black",
                      textDecoration: "none",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  Delete User
                </Link>
              </MenuItem>,

              <MenuItem key={4}>
                <Link
                  href={"/addRooms"}
                  underline={"none"}
                  sx={{
                    color: "black",
                    ":hover": {
                      color: "black",
                      textDecoration: "none",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  Add Room
                </Link>
              </MenuItem>
            ]
          )}
          <MenuItem
            onClick={() => {
              handleClose();
              dispatcher(logoutAction());
            }}
          >
            <Link
              href={"/"}
              underline={"none"}
              sx={{
                color: "black",
                ":hover": {
                  color: "black",
                  textDecoration: "none",
                  bgcolor: "transparent",
                },
              }}
            >
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
