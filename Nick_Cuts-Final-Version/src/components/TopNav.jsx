const TopNav = () => {
  return (
    <div className="w-full py-2 bg-theme">
      <div className="container w-[85%] mx-auto flex items-center justify-between">
        {/* left side */}
        <div>
          <p className="text-white text-[15px]">
            99 University Drive, Ottawa, K4K0A9
          </p>
        </div>

        {/* middle */}
        <div>
          <p className="text-white text-[15px]">Open Everyday: 9am-5pm</p>
        </div>

        {/* right */}
        <div>
          <p className="text-white text-[15px]">Call Us: 613-888-8888</p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
