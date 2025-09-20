// This is a native react method used for managing global state.  Also need to wrap <App /> in main.jsx with <AuthProvider>
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <AuthContext.Provider value={[ isLogIn, setIsLogIn ]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook so you don’t have to repeat useContext(AuthContext)
export const useAuth = () => useContext(AuthContext);