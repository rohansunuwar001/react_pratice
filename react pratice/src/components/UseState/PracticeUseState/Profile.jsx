import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState([
    {
      name: '',
      age: '',
    },
  ]);

  const handleChange = (e) => {
   const {name,value} = e.target 

   setProfile((prevProfile)=> ({
    ...prevProfile,
    [name]:value
   }))
  };

  return (
    <div>
      Profile

    <br /> 
    <br /> 

<div>
    <label>
        Name: 
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
    </label>
</div>
<br />
<div>

<label>
    Age: 
    <input type="number" name="age" id="age" value={profile.age} onChange={handleChange} />
</label>

</div>
<br />
<br />
<div>
    <h1>Profile Information</h1>
    <span>Name: {profile.name} </span>
    <br />
    <span>Age: {profile.age} </span>
</div>



    </div>
  );
};

export default Profile;
