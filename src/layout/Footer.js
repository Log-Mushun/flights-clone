import React, { useState } from "react";
import { Box, Button, Typography, Link, Stack } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { theme } from "../styles/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const Footer = () => {

    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [expanded, setExpanded] = useState(false);
  
    const handleClick1 = (event) => setAnchorEl1(event.currentTarget);
    const handleClick2 = (event) => setAnchorEl2(event.currentTarget);
  
    const handleClose1 = () => setAnchorEl1(null);
    const handleClose2 = () => setAnchorEl2(null);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      
      // Si se está expandiendo, hacer scroll
      if (isExpanded) {
        setTimeout(() => {
          event.target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }, 100); // Pequeño delay para asegurar que el acordeón se ha expandido
      }
    };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '30px' }}>

    <Box
      sx={{
          textAlign: "center",
          padding: "1rem",
          borderTop: "1px solid #e0e0e0",
          borderBottom: "1px solid #e0e0e0",
          mt: 4,
          mb: 4,
          width: {
              xs: '90%',     // móvil
              sm: '85%',     // tablet
            md: '80%',     // desktop pequeño
            lg: '55%'      // desktop grande
        },
    }}
    >
      {/* Opciones de idioma, ubicación y moneda */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        mb={2}
        >
        <Button
          variant="outlined"
          startIcon={<LanguageIcon />}
          sx={{ borderRadius: "20px", textTransform: "none" }}
          >
          Language · English (United States)
        </Button>
        <Button
          variant="outlined"
          startIcon={<RoomIcon />}
          sx={{ borderRadius: "20px", textTransform: "none" }}
          >
          Location · United States
        </Button>
        <Button
          variant="outlined"
          startIcon={<AttachMoneyIcon />}
          sx={{ borderRadius: "20px", textTransform: "none" }}
          >
          Currency · USD
        </Button>
      </Stack>

      {/* Texto explicativo */}
      <Typography variant="body2" color="text.secondary" mb={2}>
        Current language and currency options applied: English (United States) - United States - USD
        <br />
        Displayed currencies may differ from the currencies used to purchase flights.{" "}
        <Link href="#" underline="hover">
          Learn more
        </Link>
      </Typography>

      {/* Enlaces de navegación */}
      <Box>
        {["About", "Privacy", "Terms", "Join user studies", "Feedback", "Help Center"].map(
            (item, index) => (
                <Link
                key={index}
                href="#"
                underline="hover"
                color={theme.palette.common.blue}
                sx={{
                    margin: "0 10px",
                    fontSize: "0.875rem",
                    textDecorationColor: "inherit",
                }}
                >
              {item}
            </Link>
          )
        )}
      </Box>
    </Box>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: 2,
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Accordion 1 */}
      <Box sx={{ position: "relative" }}>
        <Accordion
          elevation={0}
          sx={{
            "&:before": { display: "none" },
            backgroundColor: "transparent",
            width: "fit-content",
            '&.Mui-expanded': { 
              margin: '0 !important',  // Forzar margin 0
              minHeight: '48px !important' // Mantener altura consistente
            },
            '& .MuiAccordionSummary-root': {
              minHeight: '48px !important',
              '&.Mui-expanded': {
                minHeight: '48px !important'
              }
            }
          }}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon sx={{ color: theme.palette.common.blue,}}/>}
            sx={{
              color: "#1a73e8",
              padding: 0,
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography variant="body1" color={theme.palette.common.blue} fontWeight="medium" fontSize={15} paddingRight={2}>
              International sites
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              position: "absolute", 
              top: "100%", 
              left: 0,
              zIndex: 10,
              backgroundColor: "#fff",
              padding: "8px",
            }}
          >
            <Box sx={{ 
              display: expanded ? "flex" : "none",
              flexDirection: "column", 
              gap: 1 
            }}>
              <Link href="#" underline="hover" color={theme.palette.common.blue} sx={{ fontSize: 15 }}>
                United States
              </Link>
              <Link href="#" underline="hover" color={theme.palette.common.blue} sx={{ fontSize: 15 }}>
                United Kingdom
              </Link>
              <Link href="#" underline="hover" color={theme.palette.common.blue} sx={{ fontSize: 15 }}>
                España
              </Link>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Accordion 2 */}
      <Box sx={{ position: "relative" }}>
        <Accordion
          elevation={0}
          sx={{
                "&:before": { display: "none" },
                backgroundColor: "transparent",
                width: "fit-content",
                '&.Mui-expanded': { 
                  margin: '0 !important',  // Forzar margin 0
                  minHeight: '48px !important' // Mantener altura consistente
                },
                '& .MuiAccordionSummary-root': {
                  minHeight: '48px !important',
                  '&.Mui-expanded': {
                    minHeight: '48px !important'
                  }
                }
          }}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon sx={{color: theme.palette.common.blue}}/>}
            sx={{
              color: "#1a73e8",
              padding: 0,
              "& .MuiAccordionSummary-content": { margin: 0 },
            }}
          >
            <Typography variant="body1" color={theme.palette.common.blue} fontWeight="medium" fontSize={15} paddingRight={2}>
              Explore flights
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 10,
              backgroundColor: "#fff",
              padding: "8px",
            }}
          >
            <Box sx={{ display: expanded ? "flex" : "none", flexDirection: "column", gap: 1 }}>
              <Link href="#" underline="hover" color={theme.palette.common.blue} sx={{ fontSize: 15 }}>
                Flights to Europe
              </Link>
              <Link href="#" underline="hover" color={theme.palette.common.blue} sx={{ fontSize: 15 }}>
                Flights to Asia
              </Link>
              <Link href="#" underline="hover" color={theme.palette.common.blue} sx={{ fontSize: 15 }}>
                Flights to America
              </Link>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>

    </Box>
  );
};

export default Footer;
