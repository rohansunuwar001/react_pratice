import React, { useState } from "react";
// Using Use State in an array
const UseStateExample = () => {
    const [friends, setFriends] = useState(["Rohan","Sushank","Sanket"]);

    const addOneFriend = () => setFriends([...friends,"Sigma Developer"]);

    const removeOneFriend = () => setFriends(friends.filter((f) => f !== "Sanket"));

    const updateOneFriend = () => {
        setFriends(friends.map((f)=> (f === "Rohan" ? "Rohan Sunuwar": f)));
    }

  return (
    <div>
      <h1>UseStateExample</h1>
      {friends.map(f => (
        <li key={Math.random()}> {f}</li>
      ))}


      <button onClick={addOneFriend}> Add </button>
      <button onClick={removeOneFriend}>Remove</button>
      <button onClick={updateOneFriend}>Update</button>
    </div>
  );
};

export default UseStateExample;
