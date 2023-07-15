import { useState } from "react";
import PageBanner from "../components/PageBanner";
import BarberCard from "../components/BarberCard";

const Barbers = () => {
  const [barbers, setBarbers] = useState([]);

  fetch("./barbers.json")
    .then((res) => res.json())
    .then((data) => setBarbers(data));

  return (
    <div className="min-h-screen">
      <PageBanner
        imgLink="https://images.squarespace-cdn.com/content/v1/5997c2ce17bffc656af9601b/1663562645783-E0CH7D1P3FA7L7E4TSZQ/IMG_4698.JPG"
        title="Barbers"
      />

      {/* content */}
      <div className="py-[10vh]">
        <div className="container w-[85%] mx-auto grid grid-cols-3 gap-14">
          {barbers?.map((barber) => (
            <BarberCard barber={barber} key={barber.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barbers;
