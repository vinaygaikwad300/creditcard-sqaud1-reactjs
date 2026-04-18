import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 3,
          boxShadow: 4,
          p: 2,
        }}
      >
        <CardContent>
          {/* Icon */}
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#1e293b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ color: "#fff" }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Admin Login
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            mb={3}
          >
            Sign in to access dashboard
          </Typography>

          {/* Form */}
          <Box component="form">
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.3,
                backgroundColor: "#1e293b",
                "&:hover": {
                  backgroundColor: "#334155",
                },
              }}
              onClick={()=> navigate('/admin/dashboard')}
            >
              Login
            </Button>
          </Box>

          {/* Footer Text */}
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            mt={3}
          >
            Forgot Password?
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}