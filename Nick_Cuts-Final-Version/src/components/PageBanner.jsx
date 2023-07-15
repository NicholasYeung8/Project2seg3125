const PageBanner = ({ imgLink, title }) => {
  return (
    <div
      className="h-[25vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url('${imgLink}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-white text-6xl font-bold bg-theme px-8 pt-2 pb-3">
        {title}
      </h1>
    </div>
  );
};

export default PageBanner;
