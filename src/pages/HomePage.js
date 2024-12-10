import React from 'react';
import MainLayout from '../layout/MainLayout';
import { theme } from '../styles/theme';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { ReactComponent as Flights } from '../images/svg/flights.svg';
import Typography from '@mui/material/Typography';
import FlightSearchBar from '../components/searchBar/FlightsSearchBar';
const HomePage = () => {
  return (
    <MainLayout>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70rem',
      }}>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            position: 'relative',
        }}
        >
            <CardMedia 
            component={Flights}
            sx={{ width: 1248}}
            />
            <Typography variant="h2"
            sx={{
                position: 'absolute',
                bottom: 0,
            }}
            >
                Flights
            </Typography>
        </Box>
        <FlightSearchBar />
      </Box>
    </MainLayout>
  );
};

export default HomePage;
