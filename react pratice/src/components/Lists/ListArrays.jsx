import React from "react";

const ListArrays = () => {
  const usersInfo = [
    {
      name: "Rohan",
      email: "rohan123@gmail.com",
      location: "America",
    },
    {
      name: "Rohan1",
      email: "rohan123@gmail.com",
      location: "England",
    },
    {
      name: "Rohan11",
      email: "rohan123@gmail.com",
      location: "Australia",
    },
  ];
  return (
    <div>
      <h1>ListArrays</h1>

      {usersInfo.map(({name,email,location})=>(
        <ul key={Math.random()}>
            <li>{name} </li>
            <li>{email} </li>
            <li>{location} </li>
        </ul>
      ))}
    </div>
  );
};

export default ListArrays;
