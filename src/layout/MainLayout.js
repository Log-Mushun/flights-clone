import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import Box from '@mui/material/Box';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" 
            sx={{ flexGrow: 1, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
            }}>
          {children}
        <Footer/>
        </Box>
      </Box>
  );
}
