import ReactStars from "react-rating-stars-component";

const SubmitReviewTab = ({
  submitComment,
  name,
  setName,
  feedback,
  setFeedback,
  star,
  setStar,
}) => {
  return (
    <div className="mt-16 w-7/12 mx-auto bg-cardBG shadow-lg p-10 rounded-lg">
      <h1 className="text-theme text-lg font-bold">Submit your review here</h1>

      <form className="mt-10" onSubmit={submitComment}>
        {/* name */}
        <div>
          <label className="block">
            <span className="block text-sm font-medium text-theme mb-2">
              Your Full Name*
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex: Jhon Doe"
              className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm"
              name="name"
            />
          </label>
        </div>

        {/* message */}
        <div className="mt-6">
          <label className="block">
            <span className="block text-sm font-medium text-theme mb-2">
              Your Feedback*
            </span>
            <textarea
              rows={7}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="peer ... w-full bg-white shadow-sm shadow-theme px-3 py-2 outline-none rounded-sm resize-none"
              name="name"
            ></textarea>
          </label>
        </div>

        {/* rating */}
        <div className="mt-6">
          <label className="block">
            <span className="block text-sm font-medium text-theme">
              Overall Rating*
            </span>
            <ReactStars
              count={5}
              size={25}
              value={star}
              activeColor="#FBBF24"
              onChange={(newRating) => setStar(newRating)}
            />
          </label>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-theme hover:bg-opacity-90 duration-300 px-10 py-3 text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitReviewTab;
