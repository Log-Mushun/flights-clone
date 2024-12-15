import React from 'react';
import MainLayout from '../layout/MainLayout';
import { theme } from '../styles/theme';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { ReactComponent as Flights } from '../images/svg/flights.svg';
import Typography from '@mui/material/Typography';
import FlightSearchBar from '../components/searchBar/FlightsSearchBar';
import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
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
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          width: '100%',
        }}>

          <Typography variant="h6"
              sx={{
                  textAlign: 'left',
                  mr: '4rem',
                  ml: '4rem',
                  mt: 6,
              }}>
                      Find cheap flights from your location to anywhere
                      <InfoIconOutlined sx={{ fontSize: '20px', ml: 1, color: theme.palette.grey[600] }} />
          </Typography>
        </Box>

      </Box>
     
    </MainLayout>
  );
};

export default HomePage;
