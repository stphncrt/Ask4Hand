import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getData, postData, putData } from "../util/fetchData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState();
  const [categories, setCategories] = useState();
  const [workerList, setWorkerList] = useState(null);
  const [worker, setWorker] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [occupationIds, setOccupationIds] = useState([]);
  const [city, setCity] = useState("");

  const getTitles = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await getData(endpoint);
      setTitles(response.data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await getData(endpoint);
      setCategories(response.data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutWorker = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await getData(endpoint);
      setWorker(response.data.result);
      toast.success(response?.data?.msg);
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err?.response?.data?.msg || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const postWorker = async (endpoint, data) => {
    try {
      setIsLoading(true);
      const response = await postData(endpoint, data);
      setWorker(response?.data?.result?.worker);
      toast.success(response?.data?.msg);
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      setError(err.message);
      toast.error(err?.response?.data?.msg || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const updateWorker = async (endpoint, data) => {
    try {
      setIsLoading(true);
      const response = await putData(endpoint, data);
      setWorker(response?.data?.result);
      toast.success(response?.data?.msg);
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      setError(err.message);
      toast.error(err?.response?.data?.msg || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const getWorkers = async (endpoint) => {
    try {
      setIsLoading(true);
      const response = await postData(endpoint, { occupationIds, city });
      setWorkerList(response.data.result);
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
        categories,
        error,
        isLoading,
        workerList,
        worker,
        occupationIds,
        city,
        setOccupationIds,
        logoutWorker,
        getTitles,
        getCategories,
        postWorker,
        updateWorker,
        getWorkers,
        setCity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
