import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mediaType, setMediaType] = useState("movie"); // Default media type is "movie"

  // Load user from localStorage on first load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("loggedInUser"));
    if (saved) setUser(saved); // Set user if there's a logged-in user in localStorage
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Save updated user to localStorage
  };
  const addToWatchlist = (movie) => {
    if (!user) return false; // User not logged in
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    const updatedUser = { ...user, watchlist: updatedWatchlist };
    updateUser(updatedUser);
    return true;
  };
  const logoutUser = () => {
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    setUser(null); // Clear user state
  };
  const toggleMediaType = (type) => {
    setMediaType(type);
    
  }
  return (
    <UserContext.Provider value={{ user,setUser, updateUser, logoutUser, mediaType, toggleMediaType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
