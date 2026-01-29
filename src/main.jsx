import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/reset.css";
import "./app/styles/normalize.css";
import "./app/styles/utils.css";
import "./app/styles/fonts.css";
import "./app/styles/typography.css";
import "./app/styles/variables.css";
import "./app/styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
