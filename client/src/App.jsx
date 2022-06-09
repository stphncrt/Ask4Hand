import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";
import { CssBaseline } from "@mui/material";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ButtonAppBar from "./components/Nav";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <CssBaseline>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/create" element={<CreateUser />} />
        </Routes>
      </CssBaseline>
    </AppProvider>
  );
};

export default App;
