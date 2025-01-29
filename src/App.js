import React, { useState } from "react";
import {QRCodeCanvas} from "qrcode.react";
import { TextField, Button, Container, Typography, Grid, Box } from "@mui/material";

function App() {
  // State for UPI parameters
  const [payeeVpa, setPayeeVpa] = useState("7738482563@amazonpay");
  const [payeeName, setPayeeName] = useState("Chirayu Patil");
  const [amount, setAmount] = useState("1000");
  const [transactionNote, setTransactionNote] = useState("Donation");

  // Generate UPI URL
  const generateUpiUrl = () => {
    return `upi://pay?pa=${payeeVpa}&pn=${payeeName}&tn=${transactionNote}&am=${amount}&cu=INR`;
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }} >
      <Typography variant="h4" gutterBottom align="center">
        Generate UPI QR Code
      </Typography>

      {/* Grid layout for form and QR code */}
      <Grid container spacing={4} justifyContent="center" alignItems="center"  mt={4} sx={{
            backgroundColor: "#f5f5f5", // Light gray background color
            borderRadius: "12px", // Rounded corners
            padding: "20px", // Padding inside the box
            boxShadow: 3, // Optional: add a subtle shadow for depth
          }}>
        {/* Left side - Form */}
        <Grid item xs={12} md={5} >
          <Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Payee UPI ID"
                value={payeeVpa}
                onChange={(e) => setPayeeVpa(e.target.value)}
                placeholder="7738482563@amazonpay"
                required
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label="Payee Name"
                value={payeeName}
                onChange={(e) => setPayeeName(e.target.value)}
                placeholder="Demo Payee"
                required
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                type="number"
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="10"
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label="Transaction Note"
                value={transactionNote}
                onChange={(e) => setTransactionNote(e.target.value)}
                placeholder="Demo Transaction"
              />
            </Box>
          </Box>
        </Grid>

        {/* Right side - QR Code and Details */}
        <Grid item xs={12} md={5}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h6" textAlign="center">
              {payeeName.toUpperCase()}
            </Typography>

            {/* QR Code */}
            <QRCodeCanvas value={generateUpiUrl()} size={196} />

            <Typography variant="h7" mt={1}>
              {payeeVpa}
            </Typography>

            <Typography variant="h5" mt={1} textAlign="center">
              Scan and pay with any UPI app
            </Typography>

            {/* Logos */}
            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid item>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/BHIM_SVG_Logo.svg/320px-BHIM_SVG_Logo.svg.png"
                  alt="BHIM Logo"
                  className="logo"
                  style={{ width: 120, height: 50 }}
                />
              </Grid>
              <Grid item>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg"
                  alt="UPI Logo"
                  className="logo"
                  style={{ width: 120, height: 50 }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
