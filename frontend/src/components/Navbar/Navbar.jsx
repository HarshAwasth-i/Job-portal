import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className="hover:text-blue-600 transition"
          >
            Jobs
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;