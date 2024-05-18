import { Col, Row, Space } from "antd";
import Image from "../components/home/Image";
import VideoBanner from "../components/home/VideoBanner";
import "./homeCss/styles.css";
import Channel from "./Channel";
import Services from "./Services";
import Movies from "./Movies";
import Tv from "./Tv";

const Home = () => {
  return (
    <Space size={"large"} direction="vertical">
      <Row className="Container">
        <Col xs={24} md={16}>
          <VideoBanner />
        </Col>
        <Col xs={24} md={8}>
          <Image />
        </Col>
      </Row>
      <Channel />
      <Services />
      <Movies />
      <Tv></Tv>
    </Space>
  );
};

export default Home;
