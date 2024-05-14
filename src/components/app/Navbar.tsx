import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { routes } from "../../core/common/routes.list";
import "./styles/navbar.css";
import RouteConstant from "../../core/common/route.constant";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div id="app-navbar">
      <img src="/images/messi.jpg" alt="Logo" className="logo" />
      <div id="buttons">
        {routes.map((item, index) => {
          return (
            <li
              key={`nav-${index}`}
              onClick={() => {
                navigate(item.route); //programmatic way to change route
              }}
            >
              {item.title}
            </li>
          );
        })}
      </div>
      <Button
        onClick={() => {
          navigate(RouteConstant.Login);
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Navbar;
