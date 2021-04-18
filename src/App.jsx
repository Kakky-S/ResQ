import { BrowserRouter } from "react-router-dom";
import { Router }from "./Router/Router";
//import {  } from "./ChatBot";
import "./assets/styles/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}
