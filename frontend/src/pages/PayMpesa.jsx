import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initiatePayment } from "../services/MpesaServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!phone || !amount) {
      toast.error("Please enter phone number and amount");
      return;
    }

    setLoading(true);
    try {
      const res = await initiatePayment(phone, amount);

      if (res.ResponseCode === "0") {
        toast.success("STK Push sent! Check your phone to complete payment.");
      } else {
        toast.warn(res.ResponseDescription || "Failed to initiate payment.");
      }
    } catch (err) {
      toast.error("Payment initiation failed!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-20">
      <h2 className="text-2xl font-semibold text-center mb-4">Pay via M-Pesa</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="254712345678"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <button
          type="button"
          onClick={async () => {
            await handlePayment();
            setTimeout(() => {
              navigate("/checkout");
            }, 3500); 
          }}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}
