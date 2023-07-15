import { NavLink } from "react-router-dom";

const Navbar = () => {
  // navlinks
  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Barbers",
      link: "/barbers",
    },
    {
      id: 5,
      name: "Book Now",
      link: "/booking",
    },
  ];

  return (
    <div className="w-full py-4">
      <div className="container w-[85%] mx-auto flex items-center justify-between">
        {/* left side */}
        <div>
          <NavLink to="/">
            <h1
              className="text-4xl italic font-bold"
              style={{
                fontFamily: "'Rochester', cursive",
              }}
            >
              <span className="text-theme font-extrabold mr-1">Nick</span>
              <span className="text-white bg-theme px-2">Cuts</span>
            </h1>
          </NavLink>
        </div>

        {/* right side */}
        <div>
          <ul className="flex items-center gap-5">
            {navLinks?.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link}>
                  <p className="text-primaryBlack hover:bg-theme hover:text-white duration-300 px-3 py-2">
                    {item.name}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
