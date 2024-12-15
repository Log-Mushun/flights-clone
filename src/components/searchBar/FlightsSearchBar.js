import React, { useState } from "react";
import { Box, TextField, Select, MenuItem, Button, IconButton, InputAdornment, Divider } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIconOutlined from '@mui/icons-material/CircleOutlined';
import LocationOnIconOutlined from '@mui/icons-material/LocationOnOutlined';
import { theme } from "../../styles/theme";
export default function FlightSearchBar() {
    const [isDateFieldActive, setIsDateFieldActive] = useState(false);

    return (
        <Box sx={{ position: "relative", alignItems: 'center', justifyContent: 'center',}}>

            <Box sx={{
                width: '100%',
                mt: 2,
                borderRadius: 0.3,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#fff",
                gap: 1,
                flexWrap: "wrap",
                padding: "10px 10px 40px 10px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: '4rem',
                ml: '4rem',
                flexDirection: 'column',
            }}>
                {/* Round Trip Selector */}

                <Select
                    sx={{
                        alignSelf: 'start',
                        justifySelf: 'start',
                        mr: 'auto',
                        padding: '0px 0px'
                    }}
                    defaultValue="Round trip"
                    startAdornment={<SwapHorizIcon sx={{ mr: 1, ml: 0}} />}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                borderRadius: '0px 0px 8px 8px' // Ajusta este valor según necesites
                            }
                        }
                    }}
                >
                    <MenuItem value="Round trip">Round trip</MenuItem>
                    <MenuItem value="One way">One way</MenuItem>
                    <MenuItem value="Multi-city">Multi-city</MenuItem>
                </Select>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        pt: 1,
                        width: '100%'
                    }}
                >

                    {/* From Input */}
    
                    <TextField
                        placeholder="Where from?"
                        slotProps={{
                            input: {        
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CircleIconOutlined 
                                        sx={{
                                            color: theme.palette.grey[600],
                                            fontSize: '14px',
                                            mr: 1,
                                            ml: 0,
                                        }}/>
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            flex:1
                        }}
                    />

                    {/* Swap Icon */}
                    <IconButton>
                        <SwapHorizIcon />
                    </IconButton>

                    {/* To Input */}
                    <TextField
                        placeholder="Where to?"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIconOutlined />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            flex:1
                        }}
                    />

                    {/* Dates */}
                    <TextField
                        placeholder="Departure"
                        onMouseEnter={() => setIsDateFieldActive(true)}
                        onMouseLeave={() => setIsDateFieldActive(false)}
                        onFocus={() => setIsDateFieldActive(true)}
                        onBlur={() => setIsDateFieldActive(false)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarTodayIcon
                                        sx={{
                                            color: theme.palette.grey[600],
                                            fontSize: '20px',
                                            mr: 1,
                                            ml: 0,
                                        }}
                                         />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            pl: '15px',
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                borderRight: 'none',
                                borderRadius: '10px 0px 0px 10px'
                            },
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderRight: '1px solid',
                                borderRadius: '10px'
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderRight: `2px solid ${theme.palette.common.blue}`,
                                borderRadius: '10px'
                            }
                        }}
                    />
                    <Box sx={{
                        display: isDateFieldActive ? 'none' : 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '54px',
                        borderTop: `1px solid ${theme.palette.grey[400]}`,
                        borderBottom: `1px solid ${theme.palette.grey[400]}`,
                    }}>
                        <Divider orientation="vertical" flexItem sx={{ 
                            height: '27px', 
                            alignSelf: 'center',
                            backgroundColor: theme.palette.grey[300],
                        }}/>
                    </Box>
                    <TextField
                        placeholder="Return"
                        onMouseEnter={() => setIsDateFieldActive(true)}
                        onMouseLeave={() => setIsDateFieldActive(false)}
                        onFocus={() => setIsDateFieldActive(true)}
                        onBlur={() => setIsDateFieldActive(false)}
                        slots={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            flex:1,
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                borderLeft: 'none',
                                borderRadius: '0px 10px 10px 0px'
                            },
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderLeft: '1px solid',
                                borderRadius: '10px'
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderLeft: `2px solid ${theme.palette.common.blue}`,
                                borderRadius: '10px'
                            }
                        }}
                    />

                    {/* Search Button */}

                </Box>
            </Box>
            <Button

                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                    borderRadius: "50px", padding: "10px 20px",
                    backgroundColor: theme.palette.common.blue,
                    position: "absolute",
                    bottom: -25,
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                Search
            </Button>
        </Box>
    );
}
