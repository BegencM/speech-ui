import { Col, Row } from "antd";
import Image from "../components/home/Image";
import VideoBanner from "../components/home/VideoBanner";
import "./homeCss/styles.css";

const Home = () => {
  return (
    <Row className="Container" gutter={[12, 12]}>
      <Col xs={24} md={16}>
        <VideoBanner />
      </Col>
      <Col xs={24} md={8}>
        <Image />
      </Col>
    </Row>
  );
};

export default Home;
