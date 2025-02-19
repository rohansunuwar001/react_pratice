import React from "react";

const AdminGreet = () => <h1>Welcome Admin</h1>;
const UserGreet = () => <h1>Welcome User</h1>;

const UserStatus = ({ loggedIn, isAdmin }) => {
  // if(loggedIn === true && isAdmin ===true){
  //     return <AdminGreet />
  // }else if(loggedIn ===true){
  //     return <UserGreet />
  // }

  return (isAdmin && loggedIn) ? <AdminGreet /> : <UserGreet />;
};

export default UserStatus;
