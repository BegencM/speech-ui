import { Row, Typography } from "antd";

const Movies = () => {
  return (
    <div>
      <marquee>
        <Row>
          {new Array(20).fill(0).map((_, index) => {
            return <Typography>Hello</Typography>;
          })}
        </Row>
      </marquee>
    </div>
  );
};

export default Movies;
