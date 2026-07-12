import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import AuthInput from "../../components/Auth/AuthInput";
import Button from "../../components/Button/Button";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Create your account to get started
        </p>

        <div className="space-y-5">
          <AuthInput
            type="text"
            placeholder="Enter your full name"
          />

          <AuthInput
            type="email"
            placeholder="Enter your email"
          />

          {/* Password */}
          <div className="relative">
            <AuthInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <AuthInput
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Button
            text="Register"
            className="w-full"
          />

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 hover:underline ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;