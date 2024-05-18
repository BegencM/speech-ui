import { CardActionArea } from "@mui/material";
import { Typography } from "antd";

const ServiceCard = () => {
  return (
    <div className="service-card">
      <CardActionArea className="card-action">
        <img src="/images/lg.png" />
        <Typography id="service-title">Hemme zat normalnyy</Typography>
        <Typography>
          Some description will be here later now lorem ipsum
        </Typography>
      </CardActionArea>
    </div>
  );
};

export default ServiceCard;
