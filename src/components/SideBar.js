import React, { useState } from 'react';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 240;

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'row',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    color: ("#FFC107"),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
      >
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Sidebar content */}
      </Drawer>
    </div>
  );
};

export default Sidebar;
