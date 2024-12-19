import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../../styles/theme";

const faqs = [
  { question: "How can I find last-minute flight deals?", answer: "Check regularly for promotions or use price alert tools." },
  { question: "How can I find cheap flights for a weekend getaway?", answer: "Book your flights early and travel on off-peak days like Tuesdays." },
  { question: "How can I find flight deals if my travel plans are flexible?", answer: "Use flexible date search tools to compare prices." },
  { question: "How can I find cheap flights to anywhere?", answer: "Use destination search tools that show prices for multiple locations." },
  { question: "How can I get flight alerts for my trip?", answer: "Sign up for price alerts on travel websites or apps." },
];

const FAQSection = () => {
  return (
    <Box sx={{ width: "100%", margin: "0 auto", mt: 4 }}>
      <Typography variant="h5" mb={2} fontWeight="medium" fontSize={20} color={theme.palette.common.black}>
        Frequently asked questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} elevation={0} sx={{  '&.Mui-expanded': { borderBottom: 'none', } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ "&:hover": { backgroundColor: "#f9f9f9" } }}
          >
            <Typography fontWeight="medium"color={theme.palette.common.black}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#3c4043">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
