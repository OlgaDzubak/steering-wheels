import React, { useState } from "react";

export const GlobalContext = React.createContext({
  language: "",
  languageSelectHandler: () => {},
});


const GlobalContextProvider = (props) => {

  const [language, setLanguage] = useState(()=>{ const lang = window.localStorage.getItem("language");
                                                 return (lang == null) || (!(lang === 'ua' || lang === 'ru')) ? "ua" : lang;})

  const languageSelectHandler = (language) => {
    setLanguage(language);
  };

  return  <GlobalContext.Provider
            value={{
              language: language,
              languageSelectHandler: languageSelectHandler,
            }}
          >
            {props.children}
          </GlobalContext.Provider>
};

export default GlobalContextProvider;