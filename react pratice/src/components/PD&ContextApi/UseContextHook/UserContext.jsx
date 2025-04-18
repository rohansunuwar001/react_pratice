import { createContext,useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
const [user, setUser] = useState({name:"Rohan Don"});
const updateUser = (newUser) => {
    setUser({name:newUser})
}
return <UserContext.Provider value={{user,updateUser}} >
    {children}
</UserContext.Provider>
}

export {UserProvider,UserContext};