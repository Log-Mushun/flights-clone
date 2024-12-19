import React from 'react';
import MainLayout from '../layout/MainLayout';
import { theme } from '../styles/theme';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { ReactComponent as Flights } from '../images/svg/flights.svg';
import Typography from '@mui/material/Typography';
import FlightSearchBar from '../components/searchBar/FlightsSearchBar';
import FlightsInfo from '../components/homePage/FlightsInfo';
import MapImage from './MapImage';
import ToolsSection from '../components/homePage/ToolsSection';
import Carousel from '../components/homePage/Carousel';
import Faqs from '../components/homePage/Faqs';
import PopularRoutesSection from '../components/homePage/PopularRoutesSection';

const HomePage = () => {
  return (
    <MainLayout>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: '90%', 
          sm: '85%',  
          md: '80%',    
          lg: '80%',   
          xl: '50%'      
        },
      }}>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            position: 'relative',
            width: '100%',
        }}
        >
            <CardMedia 
            component={Flights}
            sx={{ 
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            }}
            />
            <Typography 
            variant="h2"
            sx={{
                position: 'absolute',
                bottom: {
                    xs: '5%',
                    sm: '10%'
                },
            }}
            >
                Flights
            </Typography>
           
        </Box>
        <Box sx={{
          width: '100%',
          paddingRight: '5vw !important',
          paddingLeft: '5vw !important',
          boxSizing: 'border-box'
        }}>
          <FlightSearchBar />
        <FlightsInfo />
        <MapImage />
        <ToolsSection />
        <Carousel />
        <Faqs/>
        <PopularRoutesSection/>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
