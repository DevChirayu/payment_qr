import React, { useState } from "react";
import QRCode from "qrcode.react"; // Import QRCode component
import { QRCodeCanvas } from 'qrcode.react';


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
    <div className="form-container" >
      <h2>Generate UPI QR Code</h2>

      {/* Form to enter UPI parameters */}
      <form>
        <div>
          <label>Payee UPI ID</label>
          <input
            type="text"
            value={payeeVpa}
            onChange={(e) => setPayeeVpa(e.target.value)}
            placeholder="7738482563@amazonpay"
            required
          />
        </div>

        <div>
          <label>Payee Name</label>
          <input
            type="text"
            value={payeeName}
            onChange={(e) => setPayeeName(e.target.value)}
            placeholder="Demo Payee"
            required
          />
        </div>

        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10"
          />
        </div>

        <div>
          <label>Transaction Note</label>
          <input
            type="text"
            value={transactionNote}
            onChange={(e) => setTransactionNote(e.target.value)}
            placeholder="Demo Transaction"
          />
        </div>
      </form>

      <div className="qr-code-container" >
        <h3>{payeeName.toUpperCase()}</h3>
      <QRCodeCanvas value={generateUpiUrl()} size={256} />
      <h5>{payeeVpa}</h5>
      <h2>Scan and pay with any UPI app</h2>
      <div className="image-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/BHIM_SVG_Logo.svg/320px-BHIM_SVG_Logo.svg.png"
          alt="BHIM Logo"
          className="logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg"
          alt="UPI Logo"
          className="logo"
        />
      </div>


      </div>

      {/* <div>
        <h4>Generated UPI URL:</h4>
        <p>{generateUpiUrl()}</p>
        </div> */}

{/* <image src="https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg"></image> */}
    </div>
  );
}

export default App;
