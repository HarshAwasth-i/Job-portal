import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            JobPortal
          </h2>
          <p className="mt-4 text-gray-400">
            Find your dream job with thousands of opportunities from top companies.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            Email: support@jobportal.com
          </p>

          <p className="text-gray-400 mt-2">
            Phone: +91 9876543210
          </p>
        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 text-gray-500">
        © 2026 JobPortal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;