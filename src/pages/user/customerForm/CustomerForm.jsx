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
}
