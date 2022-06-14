import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState();
  const [worker, setWorker] = useState(null);
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
      setWorker(response?.data?.result?.worker);
      toast.success(response?.data?.msg);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message);
      toast.error(err?.response?.data?.msg || "Something went wrong!");
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
        worker,
        getTitles,
        postWorker,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
