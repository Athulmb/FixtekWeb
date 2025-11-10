import React, { useState, useRef } from "react";
import { loginAPI } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

function Login({ onClose, onVerified, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!password || password.length < 6) {
      setError("Please enter a valid password");
      return;
    }

    setLoading(true);
    try {
      const response = await loginAPI(email.trim(), password);

      if (response.success && response.data) {
        // ✅ Log the user into context
        login(response.data.customer, response.data.token);

        // ✅ Close modal and trigger parent redirect
        onClose();
        if (onVerified) onVerified(); // 👉 This triggers navigate("/service-booking")
      }
    } catch (err) {
      const errorMessage =
        err.message ||
        err.response?.data?.message ||
        "Login failed. Please try again.";
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

        <form onSubmit={handleLogin}>
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h2 className="text-[40px] md:text-[64px] font-bold text-black">
                Login
              </h2>
              <p className="text-black text-[20px] md:text-[25px] mt-1">
                Login to your Fixtek account
              </p>
              <div className="border-b-2 border-gray-700 mt-6"></div>
            </div>

            <img
              src="isometric-data-protection-concept-with-parent-child-login-window-lock-3d 1.png"
              alt="login illustration"
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
          <div className="mt-8 flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-[60px] md:h-[75px] px-3 py-2 border rounded-lg bg-[#E4E4E4] text-black focus:outline-none focus:ring-2 focus:ring-[#00343D]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-[622px] h-[55px] md:h-[60px] bg-[#00343D] text-white rounded-lg mt-6 hover:bg-[#024650] transition text-[16px] md:text-[18px] font-bold disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Terms */}
          <p className="text-[14px] md:text-[18px] font-medium text-black mt-6 leading-relaxed">
            By clicking on Login, I agree to our{" "}
            <span className="font-bold cursor-pointer hover:underline">
              Terms and Conditions
            </span>
            ,<br className="hidden md:block" /> our{" "}
            <span className="font-bold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>

          {/* Switch */}
          <div className="mt-6 text-center">
            <p className="text-[14px] md:text-[18px] text-black">
              Don't have an account?{" "}
              <span
                onClick={onSwitchToRegister}
                className="text-[#00343D] font-bold cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
