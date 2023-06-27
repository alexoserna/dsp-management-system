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
    <Box sx={{ display: 'flex' }}>
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
            top: theme.spacing(1),
            right: theme.spacing(1),
            zIndex: theme.zIndex.drawer + 1,
            borderRadius: '50%',
            backgroundColor: theme.palette.background.paper,
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
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Daily Log</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Weekly Roster</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Reports</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Delivery Associates</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Van Database</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Van Assignments</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Dispatch Dashboard</ListItemText>
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  marginTop: 50,
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>DSP Info</ListItemText>
              </ListItemButton>
            </ListItem>

          </List>

        </Box>
      </Drawer>
    </Box>
  );
}
