import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Layout } from "antd";
import "./styles/layout.css";

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
