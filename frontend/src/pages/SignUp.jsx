import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Container,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BlackCat from "../assets/BlackCat.png";

const Signup = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${BlackCat})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          padding: "70px 20px 0px 20px", // Added padding for content spacing
        }}
      >
        {/* Login Form Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 280,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
            padding: 4,
            marginY: 12,
            marginX: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Sign up or Login with
          </Typography>

          {/* Social Login Buttons */}
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{
              mb: 2,
              justifyContent: "flex-start",
              borderRadius: "100px",
              borderColor: "black",
              color: "black",
              height: "50px",
              padding: "16px 12px",
              textTransform: "capitalize",
            }}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            fullWidth
            sx={{
              mb: 2,
              justifyContent: "flex-start",
              borderRadius: "100px",
              borderColor: "black",
              color: "black",
              height: "50px",
              padding: "16px 12px",
              textTransform: "capitalize",
            }}
          >
            Apple
          </Button>
          <Button
            variant="outlined"
            startIcon={<AccountCircleOutlinedIcon />}
            fullWidth
            sx={{
              mb: 2,
              justifyContent: "flex-start",
              borderRadius: "100px",
              borderColor: "black",
              color: "black",
              height: "50px",
              padding: "16px 12px",
              textTransform: "capitalize",
              marginBottom: "-10px",
            }}
          >
            Microsoft
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              my: 3,
              marginBottom: "15px",
            }}
          >
            <Divider sx={{ flex: 1 }} />

            <Box
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #BCBEC0",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                }}
              >
                or
              </Typography>
            </Box>
            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* Sign Up with a New Account Button */}
          <Button
            variant="outlined"
            sx={{
              mb: 2,
              alignSelf: "center",
              borderRadius: "100px",
              borderColor: "#D6D6D7",
              color: "black",
              height: "40px",
              width: "100%",
              padding: "10px 12px",
              textTransform: "capitalize",
              backgroundColor: "#E7E7E8", // Set the background color
              marginBottom: 2,
              "&:hover": {
                backgroundColor: "#D6D6D7", // Slightly darker shade on hover
              },
            }}
          >
            Sign Up with a New Account
          </Button>

          {/* Email and Password Fields */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="name@host.com"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Password"
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "100px",
              },
            }}
          />

          <Typography variant="body2" sx={{ textAlign: "left", mb: 2 }}>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 12,
                textDecoration: "underline",
              }}
            >
              Forgot your Password?
            </a>
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                mb: 2,
                backgroundColor: "black",
                color: "#fff",
                borderRadius: "60px",
                borderWidth: "2px",
                width: "30%",
                padding: "10px 12px",
                fontFamily: "Outfit",
                textTransform: "capitalize",
              }}
            >
              Sign Up
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", fontSize: 16 }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                textDecoration: "none",
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Login
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
