import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;