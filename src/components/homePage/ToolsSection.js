import React from 'react';
import { theme } from '../../styles/theme';
import { Box, Typography } from '@mui/material';
import ToolsCardTalk from './ToolsCardTalk';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NotificationsIconOutlined from '@mui/icons-material/NotificationsOutlined';
import CardMedia from '@mui/material/CardMedia';
import CalendarImage from '../../images/svg/calendar.svg';

const ToolsSection = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            width: '100%',
            marginTop: 3
        }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Useful tools to help you find the best deals
                </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'left',
                width: '100%',
            }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                width: '45%',
            }}>

            <ToolsCardTalk 
            title="Find the cheapest days to fly"
            description="The Date grid and Price graph make it easy to see the best flight deals"
            decoration={true}
            icon={<CalendarMonthIcon  sx={{
                fontSize: "2.5rem",
                color: "#4285f4", // Color azul
                marginRight: "1rem",
              }}/>}
            />
            <ToolsCardTalk 
            title="Find the cheapest days to fly"
            description="The Date grid and Price graph make it easy to see the best flight deals"
            decoration={false}
            icon={<ShowChartIcon  sx={{
                fontSize: "2.5rem",
                color: "#4285f4", // Color azul
                marginRight: "1rem",
              }}/>}
            />

            <ToolsCardTalk 
            title="Find the cheapest days to fly"
            description="The Date grid and Price graph make it easy to see the best flight deals"
            decoration={false}
            icon={<NotificationsIconOutlined  sx={{
                fontSize: "2.5rem",
                color: "#4285f4", // Color azul
                marginRight: "1rem",
              }}/>}
            />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                width: '55%',
            }}>
                <Typography variant="h2" sx={{ marginBottom: 2, fontWeight: 'regular', fontSize: '1.4rem' }}>
                Insightful tools help you choose your trip dates
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 2, fontWeight: 'regular',}}>
                If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the <b>Date grid</b> and <b>Price graph</b> options on the Search page to find the cheapest days to get to your destination – and back again for round trips.
                </Typography>
                <CardMedia
                component="img"
                image={CalendarImage}
                alt="Calendar image with dates marked with stars and red crosses"
                sx={{ width: '30rem', height: 'auto' }}
              />
                </Box>
               
            </Box>
        </Box>
    );
};

export default ToolsSection;