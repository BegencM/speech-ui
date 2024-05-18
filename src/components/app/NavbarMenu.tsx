import React from "react";
import { routes } from "../../core/common/routes.list";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

interface IProps {
  id: string;
}

const NavbarMenu: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  return (
    <ul id={props.id}>
      {routes.map((item, index) => {
        return (
          <Button
            type="text"
            key={`nav-${index}`}
            onClick={() => {
              navigate(item.route); //programmatic way to change route
            }}
          >
            {item.title}
          </Button>
        );
      })}
    </ul>
  );
};

export default NavbarMenu;
