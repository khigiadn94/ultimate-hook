import React, { createContext, useEffect, useState, useRef } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //State
  const [isAuthenticated, setAuthenticated] = useState(false);
  const effectCalled = useRef(false);

  const toggleAuth = () => {
    setAuthenticated(!isAuthenticated);
  };

  useEffect(() => {
    if (!effectCalled.current) {
      effectCalled.current = true;
      return;
    }
    alert(
      isAuthenticated
        ? "Login successful"
        : "You are logged out. Please login to see todos"
    );
  }, [isAuthenticated]);

  // context Data
  const authContextData = {
    isAuthenticated,
    toggleAuth,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
