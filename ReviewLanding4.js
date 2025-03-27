import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Updated icons
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    role: "MERN Stack Developer",
    review:
      "I’m grateful for the opportunity to attend the MERN class at NNine Solution. The comprehensive training and hands-on approach have significantly improved my development skills.",
    image: "/priya7.jpg",
    stars: 3, // Example for fewer stars
  },
];

const ReviewLanding4 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1900,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 300,
    pauseOnHover: true,
    pauseOnFocus: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 666,
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
    <div className="mb-8 mt-10 h-auto">
      <div className="inner-container flex items-center justify-center bg-[#f3f4f6] px-8 font-Quicksand">
        <div className="bg-silde-img min-h-fit w-full rounded-2xl bg-none bg-contain bg-[position:right_center] bg-no-repeat shadow-md lg:bg-[url('/Polygon1.png')]">
          <div className="flex flex-col p-8 lg:flex-row">
            <div className="left-side flex flex-col flex-wrap justify-start justify-items-start text-center">
              <div className="first my-4 text-center font-Quicksand text-4xl font-bold text-gray-900">
                <h1 className="mb-8 mt-8 flex items-center justify-center text-center font-Quicksand text-3xl font-bold text-black 2xl:text-6xl">
                  "What Our Students Say About Us"
                </h1>
              </div>
              <div className="second mt-2 text-center text-[#959191]">
                <p className="text-md font-bold 2xl:text-2xl">
                  Insights and experiences from our learners
                </p>
              </div>
            </div>

            <div className="mx-auto w-[80vw] p-8 lg:w-[60vw]">
              <Slider
                {...settings}
                className="flex items-center justify-center"
              >
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`flex h-auto min-h-[350px] flex-col justify-between rounded-[1%_17%] bg-white bg-[url('/Ellipse10.png')] bg-[length:30%] bg-right-bottom bg-no-repeat shadow-lg transition-transform duration-300 md:w-[300px] md:justify-center lg:h-[360px] lg:w-[300px] xl:w-[370px] 2xl:w-[370px] w-full sm:w-[500px]  hover:shadow-xl max-w-sm rounded-bl-[40px] rounded-tr-[40px] overflow-hidden my-5 ${
                      activeSlide === index
                        ? "shadow-3xl opacity-200 scale-110 transform"
                        : "opacity-75"
                    }`}
                    // style={{ margin: "0 5px" }}

                    style={{ margin: "0 5px" }}
                  >
                    {" "}
                    {/* Reviewer Info */}
                    {/* Star Rating */}
                    <div className="top-comma">
                      <img
                        src="Component4.png"
                        loading="lazy"
                        alt="comma"
                        className="h-4 w-6"
                      />
                    </div>
                    <div className="p-details flex flex-col">
                      <div className="img-container flex flex-col items-center xl:flex-row xl:items-start">
                        <section className="h-16 w-16 overflow-hidden rounded-full border">
                          <img
                            src={review.image}
                            alt={review.name}
                            loading="lazy"
                            className="image h-full w-full object-cover"
                          />
                        </section>
                        <section className="text-center">
                          <h3 className="text-lg font-bold text-black">
                            {review.name}
                          </h3>
                          <h4 className="text-[0.7rem] font-bold text-black">
                            {review.role}
                          </h4>
                          {/* Star Rating */}
                          <section className="mt-4">
                            {renderStars(review.stars)}
                          </section>
                        </section>
                      </div>

                      <section className="description mt-[-2rem]">
                        {/* Review Text */}
                        <p className="mb-7 line-clamp-4 overflow-hidden text-center font-Quicksand text-[0.8rem] font-bold text-black">
                          "{review.review}"
                        </p>
                      </section>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLanding4;
