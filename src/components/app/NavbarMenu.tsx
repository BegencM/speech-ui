import React from "react";
import { routes } from "../../core/common/routes.list";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
}

const NavbarMenu: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  return (
    <ul id={props.id}>
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
    </ul>
  );
};

export default NavbarMenu;
