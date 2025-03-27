import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Updated icons
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Nirjala Shrestha",
    role: "Full Stack Developer",
    review:
      "Studying at N9 Solution has been a great experience for me. The MERN stack training is hands-on, and I’ve gained practical skills that have boosted my confidence in web development.",
    image: "/nirjala.jpg",
    stars: 4.5,
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
    stars: 3.5,
  },
  {
    id: 4,
    name: "Priya Dev",
    role: "MERN Stack Developer",
    review:
      "I’m grateful for the opportunity to attend the MERN class at NNine Solution. The comprehensive training and hands-on approach have significantly improved my development skills.",
    image: "/priya7.jpg",
    stars: 3,
  },
];

const ReviewLanding4 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar
              key={`full-${i}`}
              className="h-[24px] w-[24px] text-yellow-400"
            />
          ))}
        {hasHalfStar && (
          <FaStarHalfAlt className="h-[24px] w-[24px] text-yellow-400" />
        )}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar
              key={`empty-${i}`}
              className="h-[24px] w-[24px] text-yellow-400"
            />
          ))}
      </div>
    );
  };

  return (
    <div className="mt-10 h-auto">
      <div className="inner-container flex items-center justify-center bg-[#f3f4f6] px-8 font-Quicksand relative">
        {/* Background */}
        <div
          className="absolute inset-0 bg-[url('/Polygon1.png')] bg-right-center bg-cover bg-no-repeat shadow-md z-0"
        ></div>

        <div className="flex flex-row w-full max-w-7xl relative z-10">
          {/* Left Side - Dynamic Content */}
          <div className="left-side flex flex-col flex-wrap justify-start text-center md:w-2/5 z-10 transition-all duration-500 ease-in-out opacity-100">
            <h1 className="mb-6 mt-8 flex items-center justify-center text-center font-Quicksand text-4xl font-bold text-black transition-opacity duration-500 ease-in-out">
              {activeSlide === 0 && "What Our Students Say About Us"}
              {activeSlide === 1 && "Learn from the Best Instructors"}
              {activeSlide === 2 && "Our Students' Success Stories"}
              {activeSlide === 3 && "Your Learning Journey Starts Here"}
            </h1>
            <p className="mt-2 text-center text-sm font-bold text-[#959191] transition-opacity duration-500 ease-in-out">
              {activeSlide === 0 && "Insights and experiences from our learners"}
              {activeSlide === 1 && "Quality education that makes a difference"}
              {activeSlide === 2 && "See how our courses transform careers"}
              {activeSlide === 3 && "Join our community and level up your skills"}
            </p>
          </div>

          {/* Right Side - Slider */}
          <div className="mx-auto w-[58vw] relative z-10">
            <Slider {...settings} className="flex items-center justify-center">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`relative flex h-auto min-h-[350px] w-full flex-col justify-between rounded-[1%_17%] p-5 shadow-lg transition-transform duration-300 sm:w-[90%] md:w-[300px] md:justify-center lg:h-[360px] lg:w-[300px] xl:w-[370px] bg-[url('/Ellipse10.png')] bg-right-bottom bg-[length:30%] bg-no-repeat ${
                    activeSlide === index
                      ? "shadow-3xl opacity-100 scale-110 transform"
                      : "opacity-75"
                  }`}
                  style={{ margin: "0 5px" }}
                >
                  {/* Review Content */}
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
                        <h3 className="text-lg font-bold text-black">
                          {review.name}
                        </h3>
                        <h4 className="text-[0.7rem] font-bold text-black">
                          {review.role}
                        </h4>
                        <div className="mt-4">{renderStars(review.stars)}</div>
                      </div>
                    </div>
                    <p className="mt-3 flex flex-wrap text-center text-[0.8rem] font-bold text-black mb-7">
                      "{review.review}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLanding4;
