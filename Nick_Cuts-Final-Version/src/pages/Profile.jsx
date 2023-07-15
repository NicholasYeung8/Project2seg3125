import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import ReactStars from "react-rating-stars-component";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SubmitReviewTab from "../components/SubmitReviewTab";

const Profile = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [barberData, setBarberData] = useState(null);
  const [showReviews, setShowReviews] = useState(true);
  const [submitReview, setSubmitReview] = useState(false);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [star, setStar] = useState(0);

  useEffect(() => {
    const barber = data.find((item) => item.id === Number(id));

    if (barber) {
      const reviewsFromLocalStorage = JSON.parse(
        localStorage.getItem(`reviews_${id}`)
      );
      if (reviewsFromLocalStorage) {
        barber.reviews = reviewsFromLocalStorage;
      }
      setBarberData(barber);
    } else {
      console.log("Error");
    }
  }, [data, id]);

  //   tab change functions
  const showReviewsTab = () => {
    setSubmitReview(false);
    setShowReviews(true);
  };

  const leaveReview = () => {
    setShowReviews(false);
    setSubmitReview(true);
  };

  const submitComment = () => {
    event.preventDefault();
    if (name.length > 0 && feedback.length > 0 && star !== 0) {
      const updatedObject = { ...barberData };
      const updatedReviews = [...updatedObject.reviews];
      const newReview = {
        id: updatedReviews.length + 1,
        name: name,
        content: feedback,
        star: star,
      };
      updatedReviews.unshift(newReview);
      updatedObject.reviews = updatedReviews;
      setBarberData(updatedObject);
      setName("");
      setFeedback("");
      setStar(0);
      toast("Thanks for your valuable words!", { type: "success" });
      localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
      setSubmitReview(false);
      setShowReviews(true);
    } else if (name.length <= 0) {
      toast.error("Please write your name before submitting!");
    } else if (feedback.length <= 0) {
      toast.error("Please write your feedback before submitting!");
    } else if (star === 0) {
      toast.error("Please choose any number of rating before submitting!");
    }
  };

  return (
    <>
      <ScrollRestoration />
      <div className="min-h-screen">
        <PageBanner
          title={`Profile of ${barberData?.name}`}
          imgLink={`${barberData?.picture}`}
        />

        {/* content */}
        <div className="container w-[85%] mx-auto my-[5%]">
          {/* first section */}
          <div className="w-full my-[5%]">
            <h1
              className="text-5xl text-theme font-extrabold underline underline-offset-[15px] decoration-wavy mb-10 text-center"
              style={{
                fontFamily: "'Rochester', cursive",
              }}
            >
              More About {barberData?.name}
            </h1>

            {/* desc */}
            <div>
              <p className="underline underline-offset-2 font-bold mb-2">
                Details:
              </p>

              <p className="text-primaryGray text-[17px] leading-[160%]">
                {barberData?.desc}
              </p>
            </div>

            {/* total clients */}
            <div className="mt-8">
              <p className="font-bold mb-2 text-lg text-primaryBlack">
                <span className="text-theme">Total Client: </span>
                {barberData?.clients} <small>(Permanent)</small>
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <span className="text-theme font-bold mb-2 text-lg">
                  Overall Rating:{" "}
                </span>
                <div className="-mt-2">
                  <ReactStars
                    count={5}
                    size={25}
                    isHalf={true}
                    value={4.5}
                    activeColor="#FBBF24"
                    edit={false}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-bold mb-2 text-lg text-primaryBlack">
                <span className="text-theme">Position: </span>
                {barberData?.position} of Nick Cuts Saloon
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full mt-[8%] mb-[5%]">
            {/* Tabs */}
            <div className="flex items-center justify-center gap-10">
              <button
                onClick={showReviewsTab}
                className={`${
                  showReviews === true
                    ? "bg-theme text-white"
                    : "bg-transparent text-primaryGray"
                } py-4 px-8 rounded-md leading-none`}
              >
                All Reviews
              </button>

              <div className="h-10 w-[2px] bg-theme"></div>

              <button
                onClick={leaveReview}
                className={`${
                  submitReview === true
                    ? "bg-theme text-white"
                    : "bg-transparent text-primaryGray"
                } py-4 px-8 rounded-md leading-none`}
              >
                Leave Review
              </button>
            </div>

            {/* Tabs Content */}

            {/* all reviews */}
            {showReviews === true && (
              <div className="w-full mt-16">
                {barberData?.reviews?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-theme2 text-primaryBlack p-6 mb-8 flex gap-10 rounded-md shadow-lg"
                  >
                    <div>
                      <img
                        src={
                          item.avatar
                            ? item.avatar
                            : "https://www.w3schools.com/w3images/avatar2.png"
                        }
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </div>

                    {/* content */}
                    <div className="">
                      <p className="font-bold">{item.name}</p>

                      <div className="my-1">
                        {item.star === 1 ? (
                          <div>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                          </div>
                        ) : item.star === 2 ? (
                          <div>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                          </div>
                        ) : item.star === 3 ? (
                          <div>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                          </div>
                        ) : item.star === 4 ? (
                          <div>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                          </div>
                        ) : item.star === 5 ? (
                          <div>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                            <i className="fa-solid fa-star text-orange-400 text-sm mr-1"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <p className="text-primaryGray">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Submit Reviews */}
            {submitReview === true && (
              <SubmitReviewTab
                submitComment={submitComment}
                name={name}
                setName={setName}
                feedback={feedback}
                setFeedback={setFeedback}
                star={star}
                setStar={setStar}
                key={barberData.name}
              />
            )}
          </div>

          {/* Third Section */}
          <div className="w-full mt-[8%] mb-[5%]">
            <h1
              className="text-5xl text-theme font-extrabold underline underline-offset-[15px] decoration-wavy text-center"
              style={{
                fontFamily: "'Rochester', cursive",
              }}
            >
              Sample Work of {barberData?.name}
            </h1>

            <div className="my-20 grid grid-cols-4 gap-10">
              {barberData?.works?.map((work, i) => (
                <img key={i} src={work} alt="work_sample" className="w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
