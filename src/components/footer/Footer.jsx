import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e293b",
        color: "#ffffff",
        py: 3,
        mt: 7,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Left Section */}
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          © 2026 Credit Card Application. All Rights Reserved.
        </Typography>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Link href="#" underline="hover" color="inherit">
            Privacy Policy
          </Link>

          <Link href="#" underline="hover" color="inherit">
            Terms
          </Link>

          <Link href="#" underline="hover" color="inherit">
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
}