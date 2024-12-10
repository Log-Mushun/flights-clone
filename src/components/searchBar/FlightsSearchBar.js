import React from "react";
import { Box, TextField, Select, MenuItem, Button, IconButton, InputAdornment } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { theme } from "../../styles/theme";
export default function FlightSearchBar() {
    return (
        <Box sx={{ position: "relative" }}>

            <Box sx={{
                width: '100%',
                mt: 2,
                borderRadius: 0.3,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#fff",
                gap: 1,
                flexWrap: "wrap",
                padding: "10px 10px 40px 10px",
            }}>
                {/* Round Trip Selector */}

                <Select
                    defaultValue="Round trip"
                    startAdornment={<SwapHorizIcon sx={{ mr: 1 }} />}
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
                    }}
                >

                    {/* From Input */}
                    <TextField
                        placeholder="Where from?"
                        slots={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <RadioButtonCheckedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Swap Icon */}
                    <IconButton>
                        <SwapHorizIcon />
                    </IconButton>

                    {/* To Input */}
                    <TextField
                        placeholder="Where to?"
                        slots={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                        }}

                    />

                    {/* Dates */}
                    <TextField
                        placeholder="Wed, Jan 1"
                        slots={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ minWidth: 140 }}
                    />
                    <TextField
                        placeholder="Fri, Jan 31"
                        slots={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ minWidth: 140 }}
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
