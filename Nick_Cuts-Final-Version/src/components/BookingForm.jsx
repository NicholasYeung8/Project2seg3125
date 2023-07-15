import { useState } from "react";

const BookingForm = ({ bookingConfirm }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (event) => {
    let inputPhoneNumber = event.target.value.replace(/\D/g, "");

    if (inputPhoneNumber.length > 10) {
      inputPhoneNumber = inputPhoneNumber.slice(0, 10);
    }

    inputPhoneNumber = inputPhoneNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    setPhoneNumber(inputPhoneNumber);
  };

  return (
    <form onSubmit={(e) => bookingConfirm(e)}>
      {/* name */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Your Full Name*
          </span>
          <input
            type="text"
            placeholder="ex: Jhon Doe"
            minLength={3}
            className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm"
            name="name"
          />
          <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
            Please enter your full name
          </p>
        </label>
      </div>

      {/* Number */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Phone Number*
          </span>
          <input
            type="text"
            placeholder="ex: xxx-xxx-xxxx"
            className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm"
            name="phone"
            value={phoneNumber}
            onChange={formatPhoneNumber}
          />
          <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
            Please provide a valid phone number.
          </p>
        </label>
      </div>

      {/* Mail */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Email Address*
          </span>
          <input
            type="email"
            placeholder="ex: test@test.com"
            className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm"
            name="email"
          />
          <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
            Please provide a valid email.
          </p>
        </label>
      </div>

      {/* date */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Appointment Date*
          </span>
          <input
            type="date"
            className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm text-gray-400"
            name="date"
          />
          <p className="mt-2 mb-0 invisible peer-invalid:visible peer-invalid:mb-3 text-red-500 text-sm">
            Please select appointment date.
          </p>
        </label>
      </div>

      {/* time */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Appointment Time*
          </span>
          <input
            type="time"
            className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm text-gray-400"
            name="time"
          />
          <p className="mt-2 mb-0 invisible peer-invalid:visible peer-invalid:mb-3 text-red-500 text-sm">
            Please select appointment time.
          </p>
        </label>
      </div>

      {/* barber */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Barbers*
          </span>
          <select
            required
            name="barber"
            className="bg-white w-full p-[10px] outline-none rounded-sm shadow-sm shadow-theme text-gray-400 cursor-pointer"
          >
            <option value="not-selected">Select a barber</option>
            <option value="Wassim">Wassim</option>
            <option value="Ted">Ted</option>
            <option value="Alex">Alex</option>
            <option value="John">John</option>
            <option value="Rock">Rock</option>
            <option value="Perth">Perth</option>
          </select>
          <p className="mt-2 mb-0 invisible peer-invalid:visible peer-invalid:mb-3 text-red-500 text-sm">
            Please select your barbers.
          </p>
        </label>
      </div>

      {/* service */}
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-theme mb-2">
            Services*
          </span>
          <select
            required
            name="service"
            className="bg-white w-full p-[10px] outline-none rounded-sm shadow-sm shadow-theme text-gray-400 cursor-pointer"
          >
            <option value="not-selected">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Head Shave">Head Shave</option>
            <option value="Perm">Perm</option>
            <option value="Outline">Outline</option>
            <option value="Hair Colouring">Hair Colouring</option>
            <option value="Stylish Beard Trim">Stylish Beard Trim</option>
            <option value="Clean Shave">Clean Shave</option>
          </select>
          <p className="mt-2 mb-0 invisible peer-invalid:visible peer-invalid:mb-3 text-red-500 text-sm">
            Please select your service.
          </p>
        </label>
      </div>

      {/* button */}
      <div className="mt-4">
        <button
          type="submit"
          className="bg-theme hover:bg-opacity-90 duration-300 px-6 py-3 text-white font-semibold rounded-md"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
