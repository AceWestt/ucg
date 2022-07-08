import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("ru");
  return (
    <AppContext.Provider value={{ lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
