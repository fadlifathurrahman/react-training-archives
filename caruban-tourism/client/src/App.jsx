import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import { api } from "./utils.js";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api("/auth/me").then((user) => {
      if (!user) {
        setUser(null);
      }
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header user={user} />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}
