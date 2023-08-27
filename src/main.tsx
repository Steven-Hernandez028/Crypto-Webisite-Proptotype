import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

const theme = extendTheme({
  colors: {
    color: {
      primary: "#F4EFFF",
      secondary: "#302F2F",
      terciary: "#8D7198",
    },
  },
  fonts: {
    title: "PT Mono, monospace",
    subtitle: "Rubik, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Router>
);
