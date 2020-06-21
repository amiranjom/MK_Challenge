import React from 'react';
import { AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core';

const nav_style = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const navStyle = nav_style();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={navStyle.title}>
          Contact Form
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
