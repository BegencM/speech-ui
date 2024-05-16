import { MenuFoldOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button icon={<MenuFoldOutlined />} onClick={() => setOpen(!open)} />

      <Drawer open={open} onClose={() => setOpen(false)}>
        <NavbarMenu id="buttons-mobile" />
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
