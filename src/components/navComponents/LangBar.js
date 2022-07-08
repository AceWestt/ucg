import React from "react";
import { useAppContext } from "../../appContext";

const LangBar = () => {
  const { lang, setLang } = useAppContext();
  return (
    <div className="lang-bar">
      {langs.map((l, i) => {
        return (
          <div
            className={`lang-bar-lang ${lang === l ? "current" : ""}`}
            key={`lang-${i}`}
            onClick={() => setLang(l)}
          >
            {l}
          </div>
        );
      })}
    </div>
  );
};

export default LangBar;

const langs = ["ru", "en", "uz"];
