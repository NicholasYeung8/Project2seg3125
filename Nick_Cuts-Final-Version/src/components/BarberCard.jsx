import { NavLink } from "react-router-dom";

const BarberCard = ({ barber }) => {
  return (
    <div className="bg-cardBG rounded-2xl shadow-lg overflow-hidden group">
      {/* image */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src={barber.picture}
          alt={barber.name}
          className="w-full h-[280px] object-cover group-hover:brightness-75 duration-200"
        />
      </div>

      {/* card */}
      <div className="px-8 py-5">
        <h1
          className="text-4xl font-extrabold text-theme"
          style={{
            fontFamily: "'Rochester', cursive",
          }}
        >
          {barber.name}
        </h1>

        <p className="text-base leading-[160%] my-4 text-primaryGray">
          {barber.desc}
        </p>
      </div>

      {/* buttons */}
      <div className="text-center mt-5 mb-8">
        <NavLink to={`/barber/${barber.id}`}>
          <button className="text-white bg-theme py-3 px-8 rounded-lg hover:translate-x-3 duration-300">
            Visit Profile
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BarberCard;
