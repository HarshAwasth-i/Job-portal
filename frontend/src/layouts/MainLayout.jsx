import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-6">
        {children}
      </main>

      <footer />
    </>
  );
};

export default MainLayout;