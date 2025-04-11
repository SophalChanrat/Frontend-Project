import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("loggedInUser"));
    if (saved) setUser(saved); // Set user if there's a logged-in user in localStorage
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Save updated user to localStorage
  };

  const logoutUser = () => {
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    setUser(null); // Clear user state
  };

  return (
    <UserContext.Provider value={{ user,setUser, updateUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
