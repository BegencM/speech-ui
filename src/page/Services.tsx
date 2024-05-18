import { Col, Row, Typography } from "antd";
import "./homeCss/service.css";
import ServiceCard from "../components/service/ServiceCard";

const Services = () => {
  return (
    <div id="services">
      <Typography id="service-title">Hemme zat normalnyy</Typography>
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <Col xs={24} sm={12} md={8} style={{ width: "100%" }}>
          <ServiceCard />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <ServiceCard />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <ServiceCard />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
