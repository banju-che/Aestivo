// src/services/MpesaServices.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/mpesa/";

// 1️⃣ Initiate payment (STK Push)
export const initiatePayment = async (phone, amount) => {
  try {
    const res = await axios.post(`${API_BASE_URL}stkpush/`, {
      phone,
      amount,
    });
    return res.data;
  } catch (error) {
    console.error("Error initiating M-Pesa payment:", error.response?.data || error.message);
    throw error;
  }
};

// 2️⃣ (Optional) Get access token (for testing)
export const getAccessToken = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}token/`);
    return res.data;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};
