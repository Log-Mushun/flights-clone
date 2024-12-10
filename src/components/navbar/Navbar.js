import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Menu from "@mui/icons-material/Menu";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {ReactComponent as Logo} from '../../images/svg/moogleLight.svg';
import { SvgIcon } from "@mui/material";
// Definir el componente estilizado fuera del componente principal
const NavButton = styled(Button)(({ theme, active }) => ({
    borderRadius: theme.shape.borderRadius,
    border: active ?  'none' : theme.shape.border,
    padding: theme.spacing(1, 2),
    backgroundColor: active ? `${theme.palette.primary.overlay}50` : theme.palette.primary.light,
    color: active ? theme.palette.common.main : theme.palette.common.black,
    '&:hover': {
        backgroundColor: active ? `${theme.palette.primary.overlay}70` : `${theme.palette.primary.overlay}25`
    },
}));

export default function Navbar() {
    const [value, setValue] = React.useState(2);
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ height: 'auto', position: 'sticky', top: 0, zIndex: theme.zIndex.appBar }}>
                {drawerOpen && (
        <Box
            onClick={() => setDrawerOpen(false)}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                zIndex: theme.zIndex.backdrop,

            }}
        />
    )}
            <AppBar 
                position="static" 
                elevation={0} 
                sx={{ 
                    backgroundColor: theme.palette.background.paper,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Toolbar 
                    sx={{ 
                        justifyContent: "space-between",
                    }}
                >
                    {/* Left Tabs */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <IconButton onClick={() => setDrawerOpen(true)}
                        sx={{
                            zIndex: 98
                        }}
                        >
                            <Menu 
                                sx={{
                                    color: theme.palette.common.gray
                                }}
                            />
                        </IconButton>
                       
                        <Logo 
                        width={80}
                        />
                        <NavButton 
                            active={value === 0}
                            onClick={() => handleChange(0)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}

                        >
                            Travel
                        </NavButton>
                        <NavButton 
                            active={value === 1}
                            onClick={() => handleChange(1)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            Explore
                        </NavButton>
                        <NavButton 
                            active={value === 2}
                            onClick={() => handleChange(2)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            Flights
                        </NavButton>
                        <NavButton 
                            active={value === 3}
                            onClick={() => handleChange(3)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            Vacation rentals
                        </NavButton>
                    </Stack>
                    {/* Right Icons */}
   
                    <IconButton 
                        sx={{
                            width: 35,
                            height: 35,
                            padding: 0
                        }}
                    >
                        <AccountCircle 
                            sx={{
                                color: theme.palette.primary.main,                            
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                variant="persistent"
                sx={{
                    '& .MuiDrawer-paper': {
                        marginTop: '64px',
                        height: `calc(100% - 64px)`,
                        boxSizing: 'border-box',
                        boxShadow: '2px 0px 5px 0px rgba(0, 0, 0, 0.1)',
                        zIndex: theme.zIndex.drawer
                    },
                }}
            >
                <List sx={{ width: 250 }}>
                    <ListItem button onClick={() => handleChange(0)}>
                        <ListItemText primary="Travel" />
                    </ListItem>
                    <ListItem button onClick={() => handleChange(1)}>
                        <ListItemText primary="Explore" />
                    </ListItem>
                    <ListItem button onClick={() => handleChange(2)}>
                        <ListItemText primary="Flights" />
                    </ListItem>
                    <ListItem button onClick={() => handleChange(3)}>
                        <ListItemText primary="Vacation rentals" />
                    </ListItem>
                </List>
            </Drawer>
            
        </Box>
    );
}
