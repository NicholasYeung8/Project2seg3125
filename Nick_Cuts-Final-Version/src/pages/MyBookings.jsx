import { useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const navigate = useNavigate();
  const hasbooking = JSON.parse(localStorage.getItem("bookingData"));
  const { date, time } = hasbooking;

  const [showbookingD, setShowBookingD] = useState(false);

  // Formating Date
  const parsedDate = new Date(date);
  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Formating Time
  const parsedTime = new Date(`2000-01-01T${time}`);
  const formattedTime = parsedTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  useEffect(() => {
    if (!hasbooking) {
      navigate("/");
    }
  }, [hasbooking, navigate]);

  return (
    <div className="min-h-screen">
      <PageBanner
        imgLink="https://content3.jdmagicbox.com/comp/chennai/i7/044pxx44.xx44.190330110047.i9i7/catalogue/saloon-elite-chennai-xmcub4epay.jpg"
        title="My Bookings"
      />

      {/* content */}
      <div className="py-[5%]">
        <div className="container w-[85%] mx-auto">
          {/* heading */}
          <h1
            className="text-5xl text-theme font-extrabold text-center underline underline-offset-[15px] decoration-wavy"
            style={{
              fontFamily: "'Rochester', cursive",
            }}
          >
            Congratulations
          </h1>

          {/* popup */}
          <div className="my-14 bg-theme2 text-primaryBlack px-5 py-6 shadow-lg rounded-md">
            <p>
              Your booking has been confirmed. You should receive a copy of this
              confirmation in your email within the next 24 hours.
            </p>
          </div>

          {/* reservation details */}
          <div className="mt-20">
            <h1 className="text-3xl text-theme font-bold text-center underline underline-offset-8 decoration-wavy">
              Reservation Details
            </h1>

            <div
              className={`w-full flex items-start justify-between gap-14 my-14`}
            >
              {/* left side */}
              <div
                className={`w-full ${
                  showbookingD ? "h-[515px]" : "h-[94px]"
                } duration-500 bg-white text-primaryBlack px-5 py-6 shadow-lg rounded-md border border-theme overflow-y-hidden`}
              >
                {/* header */}
                <div className="flex justify-between items-center">
                  <p className="text-lg">
                    Dear{" "}
                    <span className="text-theme font-bold">
                      {hasbooking?.fullName}
                    </span>
                    , You have a reservation with us
                  </p>

                  <button
                    onClick={() => setShowBookingD(!showbookingD)}
                    className="bg-theme hover:bg-opacity-90 duration-300 px-5 py-[10px] text-white rounded-md"
                  >
                    {showbookingD ? "View Less" : "View More"}
                  </button>
                </div>

                {/* details */}
                <div className="mt-8">
                  {Object.entries(hasbooking)
                    ?.filter((item) => item[0] !== "date" && item[0] !== "time")
                    ?.map((key, i) => (
                      <div key={i}>
                        <p
                          className={`text-primaryBlack text-lg  border-b border-b-theme pb-2 mb-4`}
                        >
                          <span className="text-theme font-bold capitalize mr-2">
                            {key[0]} :
                          </span>{" "}
                          {key[1]}
                        </p>
                      </div>
                    ))}

                  <div>
                    <p
                      className={`text-primaryBlack text-lg border-b border-b-theme pb-2 mb-4`}
                    >
                      <span className="text-theme font-bold capitalize mr-2">
                        date :
                      </span>{" "}
                      {hasbooking && formattedDate}
                    </p>
                  </div>

                  <div>
                    <p className={`text-primaryBlack text-lg`}>
                      <span className="text-theme font-bold capitalize mr-2">
                        time :
                      </span>{" "}
                      {hasbooking && formattedTime}
                    </p>
                  </div>

                  <p className="mt-5 text-sm">
                    Thanks for stay with{" "}
                    <span
                      className="text-theme text-xl"
                      style={{
                        fontFamily: "'Rochester', cursive",
                      }}
                    >
                      Nick Cuts
                    </span>
                  </p>
                </div>
              </div>

              {/* right side */}
              <div
                className={`w-full ${
                  showbookingD ? "mt-8" : "mt-0"
                } duration-500`}
              >
                <img
                  src="https://img.freepik.com/free-photo/professional-bearded-barber-man-apron-holding-hair-cutting-machine-smiling-friendly-showing-thumbs-up-standing-purple-wall_141793-48451.jpg"
                  alt="barbaer"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
