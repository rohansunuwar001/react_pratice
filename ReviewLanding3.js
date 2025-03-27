import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Slider from "react-slick";

const ReviewLanding3 = () => {
  const reviews = [
    {
      id: 1,
      name: "Nirjala Shrestha",
      role: " Full Stack Developer",
      review:
        "Studying at N9 Solution has been a great experience for me. The MERN stack training is hands-on, and I’ve gained practical skills that have boosted my confidence in web development. ",
      image: "/nirjala.jpg",
      stars: 4.5, // Updated to include half-star example
    },
    {
      id: 2,
      name: "Riyaz Pokhrel",
      role: "Python Developer",
      review:
        "I have great experience with the Python course at N9solution. The tutors made complex things so simple.",
      image: "/riyaz.jpg",
      stars: 5,
    },
    {
      id: 3,
      name: "Sneha Tamang",
      role: "UI/UX Designer",
      review:
        "The UI/UX course gave me a clear understanding of design principles, user psychology, and the tools needed to create engaging interfaces.",
      image: "/sneha.jpg",
      stars: 3.5, // Another half-star example
    },
    {
      id: 4,
      name: "Priya Dev",
      role: "MERN Stack",
      review:
        "I’m grateful for the opportunity to attend the MERN class at NNine Solution. The comprehensive training and hands-on approach have significantly improved my development skills.",
      image: "/priya7.jpg",
      stars: 3, // Example for fewer stars
    },
  ];


  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center justify-center">
        <div className="flex">
          {Array(fullStars)
            .fill()
            .map((_, i) => (
              <FaStar key={`full-${i}`} className="h-3 w-4 text-yellow-400" />
            ))}
          {hasHalfStar && <FaStarHalfAlt className="h-3 w-4 text-yellow-400" />}
          {Array(emptyStars)
            .fill()
            .map((_, i) => (
              <FaRegStar
                key={`empty-${i}`}
                className="h-3 w-4 text-yellow-400"
              />
            ))}
        </div>
        <p className="ml-2 text-sm font-semibold text-gray-600">({rating}/5)</p>
      </div>
    );
  };
  return (
    <div>
      <div className="container mt-10 ">
        <div className="inner-container bg-[#f3f4f6] font-Quicksand flex items-center justify-center px-8 py-10 ">
          <div
            className="bg-silde-img bg-[url('/Polygon1.png')] bg-cover bg-right bg-no-repeat p-8 rounded-2xl shadow-md min-h-fit "
            style={{
              backgroundPosition: "right center",
              backgroundSize: "40%",
            }}
          >
            <div className="content-start flex flex-row m-9  ">
              {/* Left Side */}
              <div className="left-side flex flex-col justify-start justify-items-start text-center md:w-1/3 ml-[9rem]  ">
                <div className="first my-4 text-center font-Quicksand text-4xl font-bold text-gray-900 mx-[4rem]">
                  <h1 className="first">“What Our Students Say About Us?”</h1>
                </div>
                <div className="second mt-2 text-center text-sm font-bold text-[#959191]">
                  <p>Insights and experiences from our learners</p>
                </div>
              </div>
              {/* Right Side */}
             
              <div className="right-side mt-6 flex flex-col justify-end gap-6 md:mt-0 md:w-2/3">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="review-card w-72 rounded-[1%_17%] border border-gray-300 bg-white p-4 shadow-md bg-[url('/Ellipse10.png')] bg-cover bg-bottom bg-no-repeat"
                    style={{
                      backgroundPosition: "right bottom",
                      backgroundSize: "30%",
                    }}
                  >
                    <div
                    >
                      <div className="flex flex-col items-start">
                        <div className="top-comma">
                          <img
                            src="Component4.png"
                            loading="lazy"
                            alt="comma"
                            className="h-4 w-6"
                          />
                        </div>
                        {/* Profile Info */}
                        <div className="p-details flex flex-col p-3">
                          <div className="img-container flex flex-row">
                            <div className="h-16 w-16 overflow-hidden rounded-full border">
                              <img
                                src={review.image}
                                alt={review.name}
                                loading="lazy"
                                className="image h-full w-full object-cover"
                              />
                            </div>
                            <div className="text-center w-[9rem]">
                            <h3 className="text-lg font-bold text-black ">
                              {review.name}
                            </h3>
                            <h4 className="text-[0.7rem] font-bold text-black">
                              {review.role}
                            </h4>
                            {/* Star Rating */}
                            <div className="mt-4">{renderStars(review.stars)}</div>
                          </div>
                          </div>
                          
                          <div className="description">
                            {/* Review Text */}
                            <p className="mt-3 flex flex-wrap text-center text-[0.8rem] font-bold text-black mb-7">
                              "{review.review}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLanding3;
