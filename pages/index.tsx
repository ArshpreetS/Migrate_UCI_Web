import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import App from "../components/App";
import React from "react";
import { ColorModeScript } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  );
};

export default Home;
