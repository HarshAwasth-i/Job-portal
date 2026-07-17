import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BriefcaseBusiness className="h-7 w-7 text-blue-600" />

          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Job<span className="text-blue-600">Portal</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/profile"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          >
            Profile
          </Link>

          <Link
            to="/jobs"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          >
            Jobs
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
<button
  onClick={toggleTheme}
  className="
    relative
    flex
    items-center
    w-16
    h-8
    rounded-full
    bg-gray-200
    dark:bg-blue-600
    transition-all
    duration-300
    px-1
    shadow-md
    hover:shadow-lg
  "
>
  {/* Sun Icon */}
  <Sun
    size={15}
    className="absolute left-2 text-yellow-500"
  />

  {/* Moon Icon */}
  <Moon
    size={15}
    className="absolute right-2 text-white"
  />

  {/* Sliding Circle */}
  <span
    className={`
      absolute
      w-6
      h-6
      rounded-full
      bg-white
      shadow-md
      flex
      items-center
      justify-center
      transition-all
      duration-300
      ${
        theme === "dark"
          ? "translate-x-8"
          : "translate-x-0"
      }
    `}
  />
</button>

          {user ? (
            <>
              <span className="hidden md:block font-medium text-gray-800 dark:text-gray-100">
                Hi, {user.name}
              </span>

              <Button
                variant="outline"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button>
                  Register
                </Button>
              </Link>
            </>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;