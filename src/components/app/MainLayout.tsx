import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/layout.css";
import { Layout } from "antd";

const MainLayout = () => {
  return (
    <Layout>
      <Navbar />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default MainLayout;
