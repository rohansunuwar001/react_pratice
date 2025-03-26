import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Nirjala Shrestha",
    role: "Full Stack Developer",
    review: "Studying at N9 Solution has been a great experience for me. The MERN stack training is hands-on, and I’ve gained practical skills that have boosted my confidence in web development.",
    image: "/nirjala.jpg",
    stars: 4.5,
  },
  {
    id: 2,
    name: "Riyaz Pokhrel",
    role: "Python Developer",
    review: "I have great experience with the Python course at N9solution. The tutors made complex things so simple.",
    image: "/riyaz.jpg",
    stars: 5,
  },
  {
    id: 3,
    name: "Sneha Tamang",
    role: "UI/UX Designer",
    review: "The UI/UX course gave me a clear understanding of design principles, user psychology, and the tools needed to create engaging interfaces.",
    image: "/sneha.jpg",
    stars: 3.5,
  },
  {
    id: 4,
    name: "Priya Dev",
    role: "MERN Stack Developer",
    review: "I’m grateful for the opportunity to attend the MERN class at N9 Solution. The comprehensive training and hands-on approach have significantly improved my development skills.",
    image: "/priya7.jpg",
    stars: 3,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="h-5 w-5 text-yellow-400" />
        ))}
      {hasHalfStar && <FaStarHalfAlt className="h-5 w-5 text-yellow-400" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />
        ))}
      <p className="ml-2 text-sm font-semibold text-gray-600">({rating} / 5)</p>
    </div>
  );
};

const ReviewLanding2 = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          “What Our Students Say About Us?”
        </h2>
        <p className="text-gray-500 mt-2">Insights and experiences from our learners</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="relative bg-white shadow-lg rounded-2xl p-6 w-80">
            <div className="absolute top-4 left-4 text-blue-600 text-3xl">“</div>
            <div className="flex items-center space-x-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border" />
              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
            <div className="mt-2">{renderStars(review.stars)}</div>
            <p className="text-gray-700 mt-4 text-sm">{review.review}</p>
            <div className="absolute bottom-0 right-0 bg-yellow-400 w-12 h-12 rounded-tl-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewLanding2;
