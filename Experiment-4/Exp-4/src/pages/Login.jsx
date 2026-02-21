// Login.tsx
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("login clicked");
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Card
        elevation={6}
        sx={{
          backgroundColor: "black",
          color: "white",
          width: { xs: "90%", sm: 320 },
          textAlign: "center",
          border: "1px solid #ffffff33",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(255,255,255,0.25)",
          mb: 3,
        }}
      >
        <CardContent sx={{ py: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            letterSpacing={1}
          >
            Login
          </Typography>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        size="large"
        onClick={handleLogin}
        sx={{
          px: 6,
          py: 1.5,
          fontSize: "1.4rem",
          fontWeight: 600,
          backgroundColor: "white",
          color: "black",
          border: "2px solid #777",
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          "&:hover": {
            backgroundColor: "#f0f0f0",
            borderColor: "#555",
          },
        }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;