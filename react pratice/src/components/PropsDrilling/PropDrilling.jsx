import React from "react";

const PropDrilling = ({img,name,age,location}) => {
  return (
    <div>
      <h1>PropDrilling</h1>
      <img src={img} alt={name} width={200} />
      <p>
        Name:  
        {name}
      </p>
      <p>Age:{age} </p>
      <p>Location: {location} </p>
    </div>
  );
};

export default PropDrilling;
