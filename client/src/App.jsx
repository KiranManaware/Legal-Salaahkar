import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import AllLawyers from "./pages/AllLawyers";
import AllComplaints from "./pages/AllComplaints";
import SingleComplaint from "./pages/SingleComplaint";
import MyLawyer from "./pages/MyLawyer";
import RaiseComplaint from "./pages/RaiseComplaint";
import PrivateComponent from "./components/PrivateComponent";
import AllClients from "./pages/AllClients";
import LawyerDashboard from "./pages/LawyerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboards from "./pages/ClientDashboards";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateComponent />}>
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          {/* Client routes  */}
          <Route path="client-dashboard" element={<ClientDashboards />} />
          <Route path="lawyers" element={<AllLawyers />} />
          <Route path="lawyers/:id" element={<MyLawyer />} />
          <Route path="complaints" element={<AllComplaints />} />
          <Route path="raise-complaint" element={<RaiseComplaint />} />
          <Route path="complaints/:id" element={<SingleComplaint />} />
          {/* Lawyer routes  */}
          <Route path="lawyer-dashboard" element={<LawyerDashboard />} />
          <Route path="clients" element={<AllClients />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
