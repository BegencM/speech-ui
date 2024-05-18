import { Button, Row, Space } from "antd";
import { channelList } from "../core/common/channel.list";
import "./homeCss/channel.css";

const Channel = () => {
  return (
    <Space size={"middle"} direction="vertical">
      <div className="channel-list">
        {channelList.map((item, index) => {
          return (
            <div key={`channel-${index}`}>
              <img src={item.image} />
            </div>
          );
        })}
      </div>
      <Row justify={"center"}>
        <Button type="primary">Ahlisi kannallar</Button>
      </Row>
    </Space>
  );
};

export default Channel;
