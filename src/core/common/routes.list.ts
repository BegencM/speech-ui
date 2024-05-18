import { IRoute } from "../../type/route/route.type";
import RouteConstant from "./route.constant";

export const routes: IRoute[] = [
  {
    route: RouteConstant.Home,
    title: "Bas sahypa",
  },
  {
    route: RouteConstant.Channel,
    title: "Kannalar",
  },
  {
    route: RouteConstant.OnlinePayment,
    title: "Onlayn toleg",
  },
  {
    route: RouteConstant.TvSputnik,
    title: "Hemra Teleyaylymlary",
  },
  {
    route: RouteConstant.IpTv,
    title: "IPTV",
  },
];
