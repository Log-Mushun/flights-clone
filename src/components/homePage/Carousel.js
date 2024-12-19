import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { theme } from "../../styles/theme";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  { city: "Los Angeles", image: "https://via.placeholder.com/200x120" },
  { city: "Dallas", image: "https://via.placeholder.com/200x120" },
  { city: "Orlando", image: "https://via.placeholder.com/200x120" },
  { city: "Chicago", image: "https://via.placeholder.com/200x120" },
  { city: "Las Vegas", image: "https://via.placeholder.com/200x120" },
  { city: "Phoenix", image: "https://via.placeholder.com/200x120" },
  { city: "Tokyo", image: "https://via.placeholder.com/200x120" },
  { city: "London", image: "https://via.placeholder.com/200x120" },
  { city: "San Francisco", image: "https://via.placeholder.com/200x120" },
  { city: "Miami", image: "https://via.placeholder.com/200x120" },
  { city: "Houston", image: "https://via.placeholder.com/200x120" },
  { city: "Washington", image: "https://via.placeholder.com/200x120" },
  { city: "Denver", image: "https://via.placeholder.com/200x120" },
  { city: "Tampa", image: "https://via.placeholder.com/200x120" },
  { city: "Paris", image: "https://via.placeholder.com/200x120" },
  { city: "Austin", image: "https://via.placeholder.com/200x120" },
  { city: "Fort Lauderdale", image: "https://via.placeholder.com/200x120" },
  { city: "Seoul", image: "https://via.placeholder.com/200x120" },
  { city: "Seattle", image: "https://via.placeholder.com/200x120" },
  { city: "San Diego", image: "https://via.placeholder.com/200x120" },
];

const Carousel = () => {
  return (
    <Box sx={{ 

      width: "100%", 
      position: 'relative',
      overflow: 'visible',
      '& .custom-prev, & .custom-next': {
        color: theme.palette.common.grey,
        position: 'absolute',
        top: '50%',
        cursor: 'pointer',
        backgroundColor: 'white',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        zIndex: 10,
      },
      '& .custom-prev': {
        left: '0px',
      },
      '& .custom-next': {
        right: '0px',
      },
      '& .custom-prev:hover, & .custom-next:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    '& .swiper-button-disabled': {
        opacity: 0,
        cursor: 'auto',
        pointerEvents: 'none',
      }
    }}>
      <Typography variant="h6" mb={2}>
        Popular destinations from United States
      </Typography>
      <div className="custom-prev">
        <ArrowBackIosIcon sx={{ pl: 1 }} />
      </div>
      <div className="custom-next">
        <ArrowForwardIosIcon />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{ 
            nextEl: '.custom-next', 
            prevEl: '.custom-prev', 
            }}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          960: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        style={{ 
            marginLeft: '20px',
            marginRight: '20px',  
          }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: 0.25, overflow: "hidden" }}>
              <CardMedia
                component="img"
                height='120'

                image={destination.image}
                alt={destination.city}
              />
              <CardContent sx={{ position: "absolute", bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                color: "white", 
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 100%)",
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
                borderRadius: "7px",
                }}>
                <Typography variant="body1" fontWeight="bold">
                  {destination.city}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;