import React from "react";
import { useTranslation } from "react-i18next";

// import { Container } from './styles';

function Home() {
  const { t: translate } = useTranslation();
  return <div>{translate("hello")}</div>;
}

export default Home;
