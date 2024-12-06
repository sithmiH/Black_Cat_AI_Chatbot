// components/Footer.jsx
import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
        marginX: 8,
      }}
      color="transparent"
    >
      <Grid container justifyContent="space-between" sx={{ px: 2 }}>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            <Link href="#terms" color="inherit" underline="hover">
              Terms & Conditions
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            Team Nexus
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            <Link href="#privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
