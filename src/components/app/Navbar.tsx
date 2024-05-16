import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import RouteConstant from "../../core/common/route.constant";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();
  return (
    <div id="app-navbar">
      <img src="/images/messi.jpg" alt="Logo" className="logo" />
      {isTabletOrMobile ? null : <NavbarMenu id={"buttons"} />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Button
          onClick={() => {
            navigate(RouteConstant.Login);
          }}
        >
          Login
        </Button>
        {isTabletOrMobile ? <MobileNavbar /> : null}
      </div>
    </div>
  );
};

export default Navbar;
