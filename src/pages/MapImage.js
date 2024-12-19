import React from 'react';
import { CardMedia, Box } from '@mui/material';
import mapImage from '../images/staticmap.png';
import { theme } from '../styles/theme';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MapImage = () => {
    return (
        <Box sx={{ width: '100%', position: 'relative', marginTop: 2 }}>
            <CardMedia
                component="img"
                image={mapImage}
                alt="Map"
                sx={{
                    width: '100%',
                    height: '30vh',
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}
            />
            <Button variant="contained"
            sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                padding: theme.spacing(0.5, 3),
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.blue,
                '&:hover': {
                    color: theme.palette.common.darkBlue,
                },
            }}>
                Explore destinations
            </Button>

        </Box>
    );
};

export default MapImage;