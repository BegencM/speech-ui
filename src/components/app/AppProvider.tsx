import { ConfigProvider } from "antd";
import Router from "../../page/Router";
import { darkTheme, lightTheme } from "../../theme/app.theme";
import React, { createContext, useState } from "react";

type ModeType = "light" | "dark";

interface IContext {
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>> | undefined;
}
export const AppContext = createContext<IContext>({
  mode: "dark",
  setMode: undefined,
});
const AppProvider = () => {
  const [mode, setMode] = useState<ModeType>("dark");
  return (
    <AppContext.Provider
      value={{
        mode: mode,
        setMode: setMode,
      }}
    >
      <ConfigProvider theme={mode == "dark" ? darkTheme : lightTheme}>
        <Router />
      </ConfigProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
