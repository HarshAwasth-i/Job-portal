import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BriefcaseBusiness className="h-7 w-7 text-blue-600" />
          <span className="text-2xl font-bold">
            Job<span className="text-blue-600">Portal</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/jobs" className="hover:text-blue-600 transition">
            Jobs
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              <span className="hidden md:block font-medium">
                Hi, {user.name}
              </span>

              <Button variant="outline" onClick={handleLogout}>
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