import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>

          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            JobPortal
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
            Find your dream job with thousands of opportunities from top
            companies.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/jobs"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Register
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Email: support@jobportal.com
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Phone: +91 9876543210
          </p>

        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 py-5 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2026 JobPortal. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;