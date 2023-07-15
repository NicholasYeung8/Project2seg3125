import { toast } from "react-toastify";
import PageBanner from "../components/PageBanner";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  const navigate = useNavigate();

  const bookingConfirm = (e) => {
    e.preventDefault();

    const startTime = "09:00";
    const endTime = "17:00";

    const formData = {
      fullName: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      date: e.target.date.value,
      time: e.target.time.value,
      barber: e.target.barber.value,
      service: e.target.service.value,
    };

    if (formData.fullName === "") {
      toast("Please enter your name", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    if (formData.phone === "") {
      toast("Please enter your phone number", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    if (formData.email === "") {
      toast("Please enter your email", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    if (formData.date === "") {
      toast("Please pick appointment date", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    if (
      formData.time <= startTime ||
      formData.time >= endTime ||
      formData.time === ""
    ) {
      toast("Please pick date between 9am to 5pm", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    if (formData.barber === "not-selected") {
      toast("Please choose any barber", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    if (formData.service === "not-selected") {
      toast("Please choose any service", {
        autoClose: 3000,
        type: "error",
        closeOnClick: true,
      });
      return;
    }

    toast("Reservation Booked!", {
      autoClose: 3000,
      closeOnClick: true,
      type: "success",
    });

    setTimeout(() => {
      localStorage.setItem("bookingData", JSON.stringify(formData));

      navigate("/my-bookings", { state: formData });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <PageBanner
        title="Book Now"
        imgLink="https://www.malaysiaairlines.com/content/dam/mh/my/en/plan-trip/booking-and-services/group-bookings-990x557.jpg"
      />

      {/* content */}
      <div>
        <div className="py-[7%]">
          <div className="container w-[85%] mx-auto flex items-center justify-between gap-20 bg-cardBG rounded-2xl p-[2%] shadow-lg">
            {/* left side */}
            <div className="w-full">
              {/* form */}
              <div className="w-full">
                <BookingForm bookingConfirm={bookingConfirm} />
              </div>
            </div>

            {/* right side */}
            <div className="w-full">
              <img
                src="https://s3-media0.fl.yelpcdn.com/bphoto/USf2_A5FWgXS3CI9_FlU8g/1000s.jpg"
                alt="left_col_image"
                className="rounded-2xl w-full object-cover h-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
