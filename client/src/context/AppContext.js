import React, { createContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [titles, setTitles] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getTitles = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.BASE_SERVER_URL}/api${endpoint}`
      );
      setTitles(response.data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const postWorker = async (endpoint, data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.BASE_SERVER_URL}/api${endpoint}`,
        data
      );
      setResult(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        titles,
        error,
        isLoading,
        getTitles,
        postWorker,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
