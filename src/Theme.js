import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#333333',
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#ffc107', // Set your desired color for icons
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                },
            },
        },
        MuiIconButton : {
            styleOverrides: {
                root: {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#333333',
                    color: '#ffc107',
                    borderRadius: '50%',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        action: {
            active: '#3d3d3d',
            hover: '#3d3d3d',
        },
    },
    // Customize other aspects of the theme such as typography, spacing, etc.
});

export default theme;
