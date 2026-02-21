// DashboardSummary.tsx
import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const DashboardSummary = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          minHeight: "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Card
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 800,
            backgroundColor: "white",
            color: "black",
            border: "2px solid #e0e0e0", // softer than pure white border
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: 6, textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="text.primary"
            >
              This is Dashboard Summary
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mt: 2 }}
            >
              In the process of making by Ms. Rathee
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default memo(DashboardSummary);