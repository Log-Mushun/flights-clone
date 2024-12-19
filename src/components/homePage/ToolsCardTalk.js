import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../styles/theme";

const ToolsCardTalk = (props) => {
  return (
    <Box
      sx={{
        position: "relative", // Necesario para posicionar el triángulo
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#f5f9ff", // Color de fondo suave
        padding: "1.5rem",
        borderRadius: "8px",
        maxWidth: "400px",
        minHeight: "14vh",
        border: `1px solid #d2e3fc`,
        marginBottom: 2,
        marginRight: 6,
         "&::after": {
            display: props.decoration ? "block" : "none",
           content: '""',
           position: "absolute",
           top: "50%",
           right: "-25px",
           transform: "translateY(-50%)",
           borderStyle: "solid",
           borderWidth: "20px 0 20px 25px",
           borderColor: "transparent transparent transparent #f5f9ff",
         },
         "&::before": {
          display: props.decoration ? "block" : "none",
          content: '""',
          position: "absolute",
          top: "50%",
          right: "-27px",
          transform: "translateY(-50%)",
          borderStyle: "solid",
          borderWidth: "20px 0 20px 26px",
          borderColor: "transparent transparent transparent #d2e3fc",
        }
      }}
    >
      {/* Ícono */}
      {props.icon}

      {/* Contenido */}
      <Box>
        <Typography
          variant="h2"
          fontWeight="medium"
          sx={{ marginBottom: "0.3rem", fontSize: "1rem" }}
        >
            {props.title}
        </Typography>
        <Typography variant="body2" color={theme.palette.common.black} >
          {props.description}
        </Typography>
      </Box>
     
    </Box>
  );
};

export default ToolsCardTalk;
