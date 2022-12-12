import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const Home = () => {
  return (
    <div>
    
      <div className="page-container">
        
        <Sidebar />

        <div className="page-content">

          <Header />

          <Outlet ></Outlet>

        </div>
      </div>
    </div>
  );
};

export default Home;
