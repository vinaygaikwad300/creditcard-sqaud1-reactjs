import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box
} from "@mui/material";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  permanentAddress: "",
  currentAddress: "",
  birthDate: "",
  pan: ""
};
export const CustomerForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    if (!form.permanentAddress)
      newErrors.permanentAddress = "Permanent address required";

    if (!form.currentAddress)
      newErrors.currentAddress = "Current address required";

    if (!form.birthDate)
      newErrors.birthDate = "Birthdate required";

    if (!form.pan) {
      newErrors.pan = "PAN required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan)) {
      newErrors.pan = "Invalid PAN (ABCDE1234F)";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data:", form);
      alert("Form submitted successfully!");
      setForm(initialState);
      setErrors({});
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Credit Card Application Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={6}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                value={form.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={form.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Mobile Number"
                name="mobile"
                fullWidth
                value={form.mobile}
                onChange={handleChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Permanent Address"
                name="permanentAddress"
                fullWidth
                multiline
                rows={2}
                value={form.permanentAddress}
                onChange={handleChange}
                error={!!errors.permanentAddress}
                helperText={errors.permanentAddress}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Current Address"
                name="currentAddress"
                fullWidth
                multiline
                rows={2}
                value={form.currentAddress}
                onChange={handleChange}
                error={!!errors.currentAddress}
                helperText={errors.currentAddress}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Birth Date"
                name="birthDate"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={form.birthDate}
                onChange={handleChange}
                error={!!errors.birthDate}
                helperText={errors.birthDate}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="PAN Card Number"
                name="pan"
                fullWidth
                value={form.pan}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "pan",
                      value: e.target.value.toUpperCase()
                    }
                  })
                }
                error={!!errors.pan}
                helperText={errors.pan}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  );
}
