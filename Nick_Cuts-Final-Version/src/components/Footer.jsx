const Footer = () => {
  return (
    <div className="bg-theme pt-14 pb-8 footer">
      <div className="container w-[85%] mx-auto text-center">
        {/* logo */}
        <div>
          <h1
            className="text-5xl italic font-bold text-white"
            style={{
              fontFamily: "'Rochester', cursive",
            }}
          >
            <span className="font-extrabold mr-1">Nick</span>
            Cuts
          </h1>
        </div>

        {/* paragraph */}
        <div className="w-5/12 mx-auto mt-4">
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            asperiores voluptatem accusantium libero aliquid distinctio
            praesentium quos cum, quibusdam excepturi?
          </p>
        </div>

        {/* links */}
        <div className="border-y my-10"></div>

        <div>
          <p
            style={{
              fontFamily: "'Rochester', cursive",
            }}
            className="text-white"
          >
            © 2023, Nick Cuts All Right Reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
