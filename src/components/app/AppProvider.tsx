import { ConfigProvider } from "antd";
import Router from "../../page/Router";

const AppProvider = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "red",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
};

export default AppProvider;
