import AuthInput from "../../components/Auth/AuthInput";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Login
        </h2>

        <div className="space-y-5">

          <AuthInput
            type="email"
            placeholder="Enter your email"
          />

          <AuthInput
            type="password"
            placeholder="Enter your password"
          />

          <Button
            text="Login"
            className="w-full"
          />

        </div>

      </div>
    </div>
  );
};

export default Login;