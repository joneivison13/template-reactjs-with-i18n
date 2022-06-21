import React from "react";
import Provider from "./context";
import Routes from "./routes";
import GlobalStyle from "./styles/globals";
import { useTranslation, I18nextProvider } from "react-i18next";
import I18next from "./i18n";

// import { Container } from './styles';

function App() {
  return (
    <I18nextProvider i18n={I18next}>
      <Provider>
        <Routes />
        <GlobalStyle />
      </Provider>
    </I18nextProvider>
  );
}

export default App;
