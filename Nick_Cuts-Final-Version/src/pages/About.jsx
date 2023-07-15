import PageBanner from "../components/PageBanner";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <PageBanner
        imgLink="https://thebarbersonline.com/wp-content/uploads/2019/03/IMG_0216-1.jpg"
        title="About Us"
      />

      {/* content */}
      <div className="py-[7%]">
        <div className="container w-[85%] mx-auto flex items-center justify-between gap-16 bg-cardBG rounded-2xl p-[2%] shadow-lg">
          {/* left side */}
          <div className="w-full">
            <img
              src="https://i.insider.com/5820a7c246e27a28008b51eb?width=1000&format=jpeg&auto=webp"
              alt="left_col_image"
              className="rounded-2xl"
            />
          </div>

          {/* right side */}
          <div className="w-full">
            <h1
              className="text-5xl italic font-bold text-theme underline underline-offset-8 decoration-wavy"
              style={{
                fontFamily: "'Rochester', cursive",
              }}
            >
              Nick Cuts
            </h1>

            <p className="pt-6 pb-2">
              <span className="text-theme font-bold mr-2">Location : </span>99
              University Drive, Ottawa, K4K0A9
            </p>

            <p className="pt-1 pb-2">
              <span className="text-theme font-bold mr-2">Phone Number : </span>
              99 613-888-8888
            </p>

            <p className="pt-1 pb-2">
              <span className="text-theme font-bold mr-2">Email : </span>
              nickcuts@gmail.com
            </p>

            {/* availablities */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-theme underline underline-offset-8 decoration-wavy">
                Hours of Availability
              </h2>

              <p className="pt-6 pb-2">
                <span className="text-theme font-bold mr-2">
                  Everyday (including weekends):{" "}
                </span>
                9am-5pm
              </p>

              <p className="pt-1 pb-2">
                <span className="text-theme font-bold mr-2">Closed :</span>
                Canadian Statutory Holidays
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
