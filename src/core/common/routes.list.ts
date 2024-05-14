import { IRoute } from "../../type/route/route.type";
import RouteConstant from "./route.constant";

export const routes: IRoute[] = [
  {
    route: RouteConstant.Home,
    title: "Home",
  },
  {
    route: RouteConstant.Channel,
    title: "Channels",
  },
   {
    route: RouteConstant.Channel1,
    title: "Channels1",
  }, {
    route: RouteConstant.Channel2,
    title: "Channels2",
  }
];