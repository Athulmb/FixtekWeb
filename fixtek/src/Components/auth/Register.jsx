import React, { useState, useRef } from "react";
import { registerAPI } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

function Register({ onClose, onVerified, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
  });
  const [phoneCountryCode, setPhoneCountryCode] = useState("IN");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);
  const { login } = useAuth();

  const countryCodes = {
    IN: "+91",
    US: "+1",
    UK: "+44",
    AE: "+971",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validation checks...
    if (!formData.name.trim()) return setError("Please enter your name");
    if (!formData.email.trim()) return setError("Please enter your email");
    if (formData.password.length < 6)
      return setError("Password must be at least 6 characters");
    if (formData.password !== formData.password_confirmation)
      return setError("Passwords do not match");
    if (!phoneNumber.trim()) return setError("Please enter a valid phone number");
    if (!formData.address.trim()) return setError("Please enter your address");

    const fullPhone = `${countryCodes[phoneCountryCode]}${phoneNumber.trim()}`;

    setLoading(true);
    try {
      const response = await registerAPI({
        ...formData,
        phone: fullPhone,
      });

      if (response.success && response.data) {
        // ✅ Option 1: Auto login immediately
        login(response.data.customer, response.data.token);
        onClose();
        if (onVerified) onVerified(); // 👉 redirects to /service-booking
      }
    } catch (err) {
      const errorMessage =
        err.message ||
        err.response?.data?.message ||
        "Registration failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-60 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-lg w-full max-w-[777px] h-auto max-h-[90vh] p-6 md:p-9 relative font-manrope overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-black hover:text-black text-[32px] z-10"
        >
          ×
        </button>

        <form onSubmit={handleRegister}>
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[64px] font-bold text-black">
                Register
              </h2>
              <p className="text-black text-[20px] md:text-[25px] mt-1">
                Create your Fixtek account
              </p>
              <div className="border-b-2 border-gray-700 mt-6"></div>
            </div>

            <img
              src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
              alt="register illustration"
              className="w-[142px] h-[198px] object-contain mx-auto md:mx-0"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Inputs */}
          {/* ... keep your same input fields ... */}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-[622px] h-[55px] md:h-[60px] bg-[#00343D] text-white rounded-lg mt-6 hover:bg-[#024650] transition text-[16px] md:text-[18px] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="mt-6 text-center">
            <p className="text-[14px] md:text-[18px] text-black">
              Already have an account?{" "}
              <span
                onClick={onSwitchToLogin}
                className="text-[#00343D] font-bold cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
