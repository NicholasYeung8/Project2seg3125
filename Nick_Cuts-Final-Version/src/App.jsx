import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ScrollRestoration />
      <TopNav />
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
