import { Button, Typography } from "antd";

const VideoBanner = () => {
  return (
    <div className="VideoBanner">
      <div id="video-card">
        <video
          src="/images/banner.mp4"
          poster="/images/iptv.png"
          controls={true}
          autoPlay
        />
        <div>
          <Typography className="video-title">
            Start using our platform
          </Typography>
          <Typography>
            Some description will be here later now lorem ipsum
          </Typography>
          <Button type="primary">Abuna Yazylmak</Button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
