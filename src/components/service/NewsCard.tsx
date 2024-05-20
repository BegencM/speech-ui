import { CardActionArea } from "@mui/material";
import { Typography } from "antd";

const NewsCard = () => {
  return (
    <div className="service-card">
      <CardActionArea className="card-action">
        <img src="/images/lg.png" />
        <Typography id="service-title">Creator and Stories</Typography>
        <Typography>
          <h2>Celebrating International Creator Day</h2>
        </Typography>
        <Typography>14.03.1999</Typography>
      </CardActionArea>
    </div>
  );
};

export default NewsCard;
