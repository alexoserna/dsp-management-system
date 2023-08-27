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
    },
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    // Customize other aspects of the theme such as typography, spacing, etc.
});

export default theme;
