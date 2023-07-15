import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopNav from "../components/TopNav";

const Error = () => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Navbar />
      <PageBanner
        title="404 Error"
        imgLink="https://cdn.pixabay.com/photo/2021/01/10/20/03/laptop-5906264_640.png"
      />
      <div className="text-center py-[10%]">
        <h1 className="text-6xl font-bold text-theme">
          The Page you are trying to access is not available
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default Error;
