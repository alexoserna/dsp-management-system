import React, { useState } from 'react';
import { styled, useTheme, Theme, CSSObject, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Groups from '@mui/icons-material/Groups';
import Delivery from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReportIcon from '@mui/icons-material/Summarize';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transtion: 'width 0.3s',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
      }}
    >
      <CssBaseline />
      <Drawer variant='permanent' open={open}>

        {/* This is the top of the toolbar, it switches between menu icon and a chevron */}

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <IconButton
          onClick={handleDrawerClose}
          sx={{
            display: open ? 'block' : 'none',
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
            zIndex: theme.zIndex.drawer + 1,
            borderRadius: '50%',
            backgroundColor: theme.palette.background,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>

        {/* This Box contains the list elements and their Icons */}

        <Box
          sx={{
            marginTop: 'auto', // Add this property to push the lists to the bottom
            anchor: 'bottom',
          }}
        >

          <List>

            {/* Daily Log */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/DailyLog"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Daily Log"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Weekly Roster */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/WeeklyRoster"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ViewWeekIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Weekly Roster"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Reports */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/Reports"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Reports"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Delivery Associates */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/Associates"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Groups />
                </ListItemIcon>
                <ListItemText
                  primary="Delivery Associates"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Van Database */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/VanData"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Delivery />
                </ListItemIcon>
                <ListItemText
                  primary="Van Database"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Van Assignments */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/VanAssignments"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Van Assignments"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Dispatch Dashboard */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={NavLink}
                to="/"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dispatch Dashboard"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* This is for the bottom account button */}
            <ListItem disablePadding sx={{ display: 'block', marginTop: 35 }}>
              <ListItemButton
                component={NavLink}
                to="/Account"
                activeClassName="active" // Custom class name for the active link
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="DSP Info"
                  sx={{
                    opacity: open ? 1 : 0,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>

          </List>

        </Box>

      </Drawer>
      
    </Box>
  );
}
