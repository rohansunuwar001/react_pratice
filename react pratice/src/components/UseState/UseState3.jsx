import React, { useState } from "react";

const UseState3 = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spider-man",
      rating: 3,
    },
    {
      id: 2,
      title: "SuperMan",
      rating: 4,
    },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "Jhon Wick 5" } : m))
    );
  };

  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title} </li>
      ))}
      <button onClick={handleClick}>Change Name</button>

      <div className="stats">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-detail">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            <div className="stat-img">
              <img src={stat.image} alt={stat.label} height={40} width={40} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseState3;
