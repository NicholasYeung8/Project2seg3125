import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { toast } from "react-toastify";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [activeBtn, setActiveBtn] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cActiveBtn, setCactiveBtn] = useState(1);
  const [french, setFrench] = useState(false);

  fetch("./services.json")
    .then((res) => res.json())
    .then((data) => setServices(data));

  const zerotoTwenty = () => {
    setPriceFilter("0to20");
    const message = french
      ? "Affichage du résultat entre 0 et 20€"
      : "Showing Result between 0 to 20$";
    toast(message, { type: "info" });
    setActiveBtn(2);
  };

  const twentytoFourty = () => {
    setPriceFilter("20to40");
    const message = french
      ? "Affichage du résultat entre 20 et 40€"
      : "Showing Result between 20 to 40$";
    toast(message, { type: "info" });
    setActiveBtn(3);
  };

  const fourtytoSixty = () => {
    setPriceFilter("40to60");
    const message = french
      ? "Affichage du résultat entre 40 et 60€"
      : "Showing Result between 40 to 60$";
    toast(message, { type: "info" });
    setActiveBtn(4);
  };

  const sixtytoEighty = () => {
    setPriceFilter("60to80");
    const message = french
      ? "Affichage du résultat entre 60 et 80€"
      : "Showing Result between 60 to 80$";
    toast(message, { type: "info" });
    setActiveBtn(5);
  };

  const showAll = () => {
    setPriceFilter("");
    const message = french
      ? "Affichage des résultats pour toutes les gammes de prix"
      : "Showing Result for All Price Range";
    toast(message, { type: "info" });
    setActiveBtn(1);
  };

  const selectHairandBeard = () => {
    setCategoryFilter("");
    const message = french
      ? "Résultat pour Hair and Beard Services"
      : "Showing Result for Hair and Beard Services";

    toast(message, { type: "info" });
    setCactiveBtn(1);
  };

  const selectHair = () => {
    setCategoryFilter("hair");
    const message = french
      ? "Affichage des résultats pour les services de coiffure uniquement"
      : "Showing Result for Hair Services only";
    toast(message, { type: "info" });
    setCactiveBtn(2);
  };

  const selectBeard = () => {
    setCategoryFilter("beard");
    const message = french
      ? "Affichage du résultat pour les services de barbe uniquement"
      : "Showing Result for Beard Services only";
    toast(message, { type: "info" });
    setCactiveBtn(3);
  };

  const switchToEnglish = () => {
    setFrench(false);
    toast("Switched to English Language", { type: "success" });
  };

  const switchToFranch = () => {
    setFrench(true);
    toast("Passé à la langue française", {
      type: "success",
    });
  };

  return (
    <div className="min-h-screen">
      <PageBanner
        title={french ? "Prestations de service" : "Services"}
        imgLink="https://res.cloudinary.com/liaison-inc/image/upload/c_fill,f_auto,q_auto/services/fash/backgrounds/hair-salon.jpg"
      />

      {/* content container */}
      <div className="container mx-auto w-[85%] my-[3%]">
        {/* Button */}
        <div>
          {/* heading */}
          <h1
            className="text-4xl font-extralight text-theme underline underline-offset-[6px] decoration-wavy"
            style={{
              fontFamily: "'Rochester', cursive",
            }}
          >
            {french ? "Changer de langue" : "Switch Language"}
          </h1>

          <div className="my-7 flex gap-8">
            <button
              onClick={switchToEnglish}
              className={`${
                french === true
                  ? "bg-transparent text-primaryBlack border border-theme"
                  : "bg-theme text-white"
              }  py-3 px-8 rounded-lg hover:translate-x-3 duration-300`}
            >
              English
            </button>

            <button
              onClick={switchToFranch}
              className={`${
                french === true
                  ? "bg-theme text-white"
                  : "text-primaryBlack bg-transparent border border-theme"
              }  py-3 px-8 rounded-lg hover:translate-x-3 duration-300`}
            >
              French
            </button>
          </div>
        </div>

        {/* filter buttons */}
        <div className="w-full flex items-center justify-between">
          <div className="w-full">
            {/* Heading */}
            <h1
              className="text-4xl font-extralight text-theme underline underline-offset-[6px] decoration-wavy"
              style={{
                fontFamily: "'Rochester', cursive",
              }}
            >
              {french ? "Filtrer par prix" : "Filter by Price"}
            </h1>
            {/* Buttons */}
            <div className="my-10 flex gap-2 flex-wrap">
              <button
                className={`${
                  activeBtn === 2
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={zerotoTwenty}
              >
                {french ? "0 - 20€" : "0 - 20$"}
              </button>

              <button
                className={`${
                  activeBtn === 3
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={twentytoFourty}
              >
                {french ? "20 - 20€" : "20 - 40$"}
              </button>

              <button
                className={`${
                  activeBtn === 4
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={fourtytoSixty}
              >
                ${french ? "40 - 60€" : "40 - 60$"}
              </button>

              <button
                className={`${
                  activeBtn === 5
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={sixtytoEighty}
              >
                ${french ? "60 - 80€" : "60 - 80$"}
              </button>

              <button
                className={`${
                  activeBtn === 1
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={showAll}
              >
                {french ? "Toute" : "All"}
              </button>
            </div>
          </div>

          <div className="w-full text-end">
            {/* Heading */}
            <h1
              className="text-4xl font-extralight text-theme underline underline-offset-[6px] decoration-wavy"
              style={{
                fontFamily: "'Rochester', cursive",
              }}
            >
              {french ? "Filtrer par catégorie" : "Filter by Category"}
            </h1>
            {/* Buttons */}
            <div className="flex gap-2 justify-end flex-wrap my-10">
              <button
                className={`${
                  cActiveBtn === 1
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={selectHairandBeard}
              >
                {french ? "Coupes de cheveux/barbe" : " Hair/Beard Cuts"}
              </button>
              <button
                className={`${
                  cActiveBtn === 2
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={selectHair}
              >
                {french ? "Cheveux" : "Hair"}
              </button>
              <button
                className={`${
                  cActiveBtn === 3
                    ? "bg-theme text-white"
                    : "bg-cardBG text-primaryBlack"
                } border border-theme font-bold py-3 px-8 rounded-lg`}
                onClick={selectBeard}
              >
                {french ? "Barbe" : "Beard"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {services
            ?.filter(
              (item) =>
                item.filterPrice.includes(priceFilter) &&
                item.category.includes(categoryFilter)
            )
            .map((item) => (
              <ServiceCard french={french} item={item} key={item.id} />
            ))}

          {services.length > 0 &&
            services?.filter(
              (item) =>
                item.filterPrice.includes(priceFilter) &&
                item.category.includes(categoryFilter)
            ).length === 0 && (
              <div className="text-primaryGray text-xl text-center">
                No filtered result found.
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Services;
