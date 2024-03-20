import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Default User",
});
export default UserContext;

// React provides us a utlitily function createContext and inside this we provide that information which we will access at various places.
