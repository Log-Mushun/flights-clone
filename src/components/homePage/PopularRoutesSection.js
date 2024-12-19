import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { theme } from "../../styles/theme";

const popularRoutes = [
  "Flights from New York to London",
  "Flights from New York to Paris",
  "Flights from London to Paris",
  "Flights from New York to Rome",
  "Flights from Montreal to Paris",
  "Flights from London to Milan",
  "Flights from Toronto to London",
  "Flights from New York to Milan",
  "Flights from London to Dubai",
  "Flights from London to Tokyo",
  "Flights from Madrid to Rome",
  "Flights from London to Delhi",
  "Flights from New York to Los Angeles",
  "Flights from Paris to Marrakech",
  "Flights from Sao Paulo to London",
  "Flights from London to Istanbul",
  "Flights from Paris to Bangkok",
  "Flights from New York to Orlando",
  "Flights from London to Berlin",
  "Flights from Chicago to Paris",
  "Flights from Melbourne to London",
];

const PopularRoutesSection = () => {
  const routesPerColumn = Math.ceil(popularRoutes.length / 3);
  const column1 = popularRoutes.slice(0, routesPerColumn);
  const column2 = popularRoutes.slice(routesPerColumn, routesPerColumn * 2);
  const column3 = popularRoutes.slice(routesPerColumn * 2);

  return (
    <Box sx={{ width: "100%", margin: "0 auto", mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Find cheap flights on popular routes
      </Typography>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "row",
        gap: 2,
      }}>
        {[column1, column2, column3].map((column, columnIndex) => (
          <Box 
            key={`column-${columnIndex}`}
            sx={{ 
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1 
            }}
          >
            {column.map((route, index) => (
              <Link
                key={index}
                href="#"
                underline="none"
                color={theme.palette.common.blue}
                sx={{ fontSize: "0.95rem", "&:hover": { color: theme.palette.common.darkBlue } }}
              >
                {route}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PopularRoutesSection;
