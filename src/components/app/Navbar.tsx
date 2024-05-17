import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import RouteConstant from "../../core/common/route.constant";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import NavbarMenu from "./NavbarMenu";
import { useContext } from "react";
import { AppContext } from "./AppProvider";
import { IconButton } from "@mui/material";
import { MoonFilled } from "@ant-design/icons";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();
  const { mode, setMode } = useContext(AppContext);
  return (
    <div id="app-navbar">
      <img src="/images/lg.png" alt="Logo" className="logo" />
      {isTabletOrMobile ? null : <NavbarMenu id={"buttons"} />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Button type="default">
          <Typography>Shahsy Otag</Typography>
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate(RouteConstant.OnlineSupport);
          }}
        >
          Online goldaw
        </Button>
        <Button>TM</Button>
        <Button
          type="text"
          icon={<MoonFilled />}
          onClick={() => {
            if (setMode) {
              setMode(mode == "dark" ? "light" : "dark");
            }
          }}
        />
        {isTabletOrMobile ? <MobileNavbar /> : null}
      </div>
    </div>
  );
};

export default Navbar;
