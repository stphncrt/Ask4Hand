import React, { createContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [occupations, setOccupations] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getOccupations = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.BASE_SERVER_URL}/api${endpoint}`
      );
      setOccupations(response.data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        occupations,
        error,
        isLoading,
        getOccupations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
