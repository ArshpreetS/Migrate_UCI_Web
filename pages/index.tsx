import type { NextPage } from "next";
import {useEffect} from 'react';
import Head from "next/head";
import Image from "next/image";
import App from "../components/App";
import React from "react";
import * as serviceWorker from '../utils/serviceWorker';
import reportWebVitals from "../utils/reportWebVitals";
import { ColorModeScript } from "@chakra-ui/react";
import { startWebsocketConnection } from "../components/websocket";




const Home: NextPage = () => {
  // useEffect(() => {
  //   serviceWorker.unregister();
  // })

  return (
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  );
};
export default Home;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
startWebsocketConnection();
reportWebVitals();

