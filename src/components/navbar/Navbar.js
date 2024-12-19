import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Menu from "@mui/icons-material/Menu";
import LuggageIcon from "@mui/icons-material/Luggage";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HouseIcon from "@mui/icons-material/House";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {ReactComponent as Logo} from '../../images/svg/moogleLight.svg';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LanguageIcon from '@mui/icons-material/Language';
import MoneyIcon from '@mui/icons-material/Money';
import SettingsIconOutlined from '@mui/icons-material/SettingsOutlined';
import FeedbackIconOutlined from '@mui/icons-material/FeedbackOutlined';
import HelpIconOutlined from '@mui/icons-material/HelpOutlined';
import EditLocationAltIconOutlined from '@mui/icons-material/EditLocationAltOutlined';


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
                                    color: theme.palette.common.grey
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
                            <LuggageIcon sx={{marginRight: 1, fontSize: 18, color: theme.palette.common.blue}}/>
                            Travel
                        </NavButton>
                        <NavButton 
                            active={value === 1}
                            onClick={() => handleChange(1)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            <TravelExploreIcon sx={{marginRight: 1, fontSize: 18, color: theme.palette.common.blue}}/>
                            Explore
                        </NavButton>
                        <NavButton 
                            active={value === 2}
                            onClick={() => handleChange(2)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            <FlightIcon sx={{marginRight: 1, fontSize: 18, color: theme.palette.common.blue}}/>
                            Flights
                        </NavButton>
                        <NavButton 
                            active={value === 3}
                            onClick={() => handleChange(3)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            <HotelIcon sx={{marginRight: 1, fontSize: 18, color: theme.palette.common.blue}}/>
                            Hotels
                        </NavButton>
                        <NavButton 
                            active={value === 4}
                            onClick={() => handleChange(4)}
                            sx={{
                                zIndex: theme.zIndex.barButton
                            }}
                        >
                            <HouseIcon sx={{marginRight: 1, fontSize: 18, color: theme.palette.common.blue}}/>
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
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    gap: '20px'
                }}
            >
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <List sx={{ width: 250, borderBottom: `1px solid ${theme.palette.divider}` }}>
                        <ListItem button onClick={() => handleChange(0)} selected={value === 0} sx={{backgroundColor: value === 0 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 0 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <LuggageIcon sx={{marginRight: 3, fontSize: 22, color: value === 0 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Travel" sx={{ color: value === 0 ? theme.palette.common.blue : 'inherit' }}/>
                        </ListItem>
                        <ListItem button onClick={() => handleChange(1)} selected={value === 1} sx={{backgroundColor: value === 1 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 1 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <TravelExploreIcon sx={{marginRight: 3, fontSize: 22, color: value === 1 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Explore" sx={{ color: value === 1 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleChange(2)} selected={value === 2} sx={{backgroundColor: value === 2 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 2 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <FlightIcon sx={{marginRight: 3, fontSize: 22, color: value === 2 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Flights" sx={{ color: value === 2 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleChange(3)} selected={value === 3} sx={{backgroundColor: value === 3 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 3 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <HotelIcon sx={{marginRight: 3, fontSize: 22, color: value === 3 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Hotels" sx={{ color: value === 3 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleChange(4)} selected={value === 4} sx={{backgroundColor: value === 4 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 4 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <HouseIcon sx={{marginRight: 3, fontSize: 22, color: value === 4 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Vacation rentals" sx={{ color: value === 4 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                    </List>
                    <List sx={{ width: 250 }}>
                        <ListItem button onClick={() => handleChange(5)} selected={value === 5} sx={{backgroundColor: value === 5 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 5 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <ShowChartIcon sx={{marginRight: 3, fontSize: 22, color: value === 5 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Tracked Flight Prices" sx={{ color: value === 5 ? theme.palette.common.blue : 'inherit' }}/>
                        </ListItem>
                        <ListItem button onClick={() => handleChange(6)} selected={value === 6} sx={{backgroundColor: value === 6 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 6 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <LanguageIcon sx={{marginRight: 3, fontSize: 22, color: value === 6 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Change Language" sx={{ color: value === 6 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleChange(7)} selected={value === 7} sx={{backgroundColor: value === 7 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 7 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <MoneyIcon sx={{marginRight: 3, fontSize: 22, color: value === 7 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Change Currency" sx={{ color: value === 7 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                        <ListItem button onClick={() => handleChange(8)} selected={value === 8} sx={{backgroundColor: value === 8 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 8 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                            <EditLocationAltIconOutlined sx={{marginRight: 3, fontSize: 22, color: value === 8 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                            <ListItemText primary="Change Location" sx={{ color: value === 8 ? theme.palette.common.blue : 'inherit' }} />
                        </ListItem>
                    </List>
                </Box>
                <List sx={{ width: 250, borderTop: `1px solid ${theme.palette.divider}` }}>
                    <ListItem button onClick={() => handleChange(5)} selected={value === 5} sx={{backgroundColor: value === 5 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 5 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                        <SettingsIconOutlined sx={{marginRight: 3, fontSize: 22, color: value === 5 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                        <ListItemText primary="Flights Settings" sx={{ color: value === 5 ? theme.palette.common.blue : 'inherit' }}/>
                    </ListItem>
                    <ListItem button onClick={() => handleChange(6)} selected={value === 6} sx={{backgroundColor: value === 6 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 6 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                        <FeedbackIconOutlined sx={{marginRight: 3, fontSize: 22, color: value === 6 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                        <ListItemText primary="Feedback" sx={{ color: value === 6 ? theme.palette.common.blue : 'inherit' }} />
                    </ListItem>
                    <ListItem button onClick={() => handleChange(7)} selected={value === 7} sx={{backgroundColor: value === 7 ? `${theme.palette.primary.overlay}50` : 'transparent', width: '93%', borderRadius: '0 30px 30px 0', '&:hover': {backgroundColor: value === 7 ? `${theme.palette.primary.overlay}50` : `${theme.palette.common.grey}15`}, cursor: 'pointer'}}>
                        <HelpIconOutlined sx={{marginRight: 3, fontSize: 22, color: value === 7 ? theme.palette.common.blue : theme.palette.common.grey}}/>
                        <ListItemText primary="Help" sx={{ color: value === 7 ? theme.palette.common.blue : 'inherit' }} />
                    </ListItem>
                </List>
            </Drawer>
            
        </Box>
    );
}
