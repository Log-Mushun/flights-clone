import React, { useState } from 'react';
import { Box, Typography, IconButton, Paper, Popper } from '@mui/material';
import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import { theme } from '../../styles/theme';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const CityButton = styled(Button)(({ theme, active }) => ({
    borderRadius: theme.shape.borderRadius,
    border: active ?  'none' : theme.shape.border,
    padding: theme.spacing(0.5, 2),
    backgroundColor: active ? `${theme.palette.primary.overlay}0` : `${theme.palette.primary.overlay}0`,
    color: theme.palette.common.blue,
    '&:hover': {
        backgroundColor: active ? `${theme.palette.primary.overlay}0` : `${theme.palette.primary.overlay}0`,
        color: theme.palette.common.darkBlue,
    },
    '&:focus': {
        backgroundColor: active ? `${theme.palette.primary.overlay}0` : `${theme.palette.primary.overlay}0`,
        color: theme.palette.common.darkBlue,
    },
    '&:active': {
        backgroundColor: active ? `${theme.palette.primary.overlay}0` : `${theme.palette.primary.overlay}0`,
        color: theme.palette.common.darkBlue,
    },
}));

export default function FlightsInfo() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            width: '100%',
        }}>
            <Typography variant="h6" sx={{ textAlign: 'left', mt: 6 }}>
                Find cheap flights from your location to anywhere
                <IconButton 
                    onClick={handleClick}
                    size="small"
                    sx={{ 
                        ml: 1,
                        '&:hover': {
                            backgroundColor: 'transparent'
                        },
                        '&.Mui-focusVisible': {
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    <InfoIconOutlined 
                        sx={{ 
                            fontSize: '25px', 
                            color: theme.palette.grey[600]
                        }} 
                    />
                </IconButton>
            </Typography>

            <Popper 
                open={open} 
                anchorEl={anchorEl}
                placement="top"
                sx={{ zIndex: 1000 }}
            >
                <Paper 
                    sx={{
              
                        maxWidth: '270px',
                        position: 'relative',
                        borderRadius: '10px',
                        mb: 2,
                        boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            bottom: -21,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderWidth: '20px 10px 0 10px',
                            borderStyle: 'solid',
                            borderColor: 'rgba(0,0,0,0.15) transparent transparent transparent',
                            filter: 'blur(1px)',
                            zIndex: -1
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderWidth: '20px 10px 0 10px',
                            borderStyle: 'solid',
                            borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
                        }
                    }}
                >
                    <Box sx={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        mb: 1
                    }}>
                                                <Typography variant="body2" sx={{ color: theme.palette.grey[700], margin: '20px 10px 20px 20px'}}>
                        These suggestions are based on the cheapest fares to popular destinations in the next six months.
                        Prices include required taxes + fees for 1 adult. Optional charges and bag fees may apply.
                    </Typography>
                        <IconButton 
                            onClick={handleClick}
                            size="small"
                            sx={{ 
                            }}
                        >
                            <CloseIcon sx={{ fontSize: '18px', color: theme.palette.grey[600] }} />
                        </IconButton>
                    </Box>
                   
                </Paper>
            </Popper>
            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <CityButton>
                Seattle
            </CityButton>
            <CityButton>
                Dallas
            </CityButton>
            <CityButton>
                Chicago
            </CityButton>
            <CityButton>
                Atlanta
            </CityButton>
            </Stack>
        </Box>
    );
}