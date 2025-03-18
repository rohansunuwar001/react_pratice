import React, { useState } from "react";

const UseStateExample2 = () => {
  const [movie, setMovie] = useState({
    title: "Bahubali 3",
    ratings: 5,
  });

  const handleClick = () => {
    // const copyMovie = {
    //     ...movie,
    //     ratings:10
    // }
    // setMovie(copyMovie);

    setMovie({ ...movie, ratings: 20 });
  };
  return (
    <div>
      <h1>UseStateExample2</h1>
      <h1>Title : {movie.title}</h1>
      <h1>Ratings : {movie.ratings}</h1>
      <br />
      <button onClick={handleClick}>Change Rating</button>
    </div>
  );
};

export default UseStateExample2;
