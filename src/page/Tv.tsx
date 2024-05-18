import { Row, Col, Button, Typography, Divider } from "antd";
import "./homeCss/tv.css";

const Tv = () => {
  return (
    <div>
      <Divider
        style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.2)" }}
      />
      <Row id="tv_row" gutter={[16, 16]} align={"middle"}>
        <Col xs={24} md={12}>
          <img src="/images/messi.jpg" alt="" id="tv-image" />
        </Col>
        <Col xs={24} md={12}>
          <div id="tv_text">
            <Typography>
              <h2>
                ALEMTV hyzmaty tomasacylary nameler bilen ozine cekip biler?
              </h2>
            </Typography>
            <Typography>
              Ilki bilen bu ajayp Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit nulla vitae velit dolores?
            </Typography>
            <Button type="primary">Ahlisi</Button>
          </div>
        </Col>
      </Row>
      <Divider
        style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.2)" }}
      />
    </div>
  );
};

export default Tv;
