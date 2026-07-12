import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import AuthInput from "../../components/Auth/AuthInput";
import Button from "../../components/Button/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
  console.log("Email:", email);
  console.log("Password:", password);
};

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to continue
        </p>

        <div className="space-y-5">

         <AuthInput
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

          <div className="relative">

           <AuthInput
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember Me

            </label>

            <button className="text-blue-600 hover:underline">
              Forgot Password?
            </button>

          </div>

         <Button
  text="Login"
  className="w-full"
  onClick={handleLogin}
/>

          <p className="text-center text-sm text-gray-500">
  Don't have an account?

  <Link
    to="/register"
    className="text-blue-600 hover:underline ml-1"
  >
    Register
  </Link>

</p>

        </div>

      </div>
    </div>
  );
};

export default Login;