import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/app/MainLayout";
import Home from "./Home";
import Channel from "./Channel";
import RouteConstant from "../core/common/route.constant";
import Login from "./Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteConstant.Home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={RouteConstant.Channel} element={<Channel />} />
        </Route>
        <Route path={RouteConstant.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
