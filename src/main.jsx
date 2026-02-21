import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles/reset.css";
import "./shared/styles/normalize.css";
import "./shared/styles/utils.css";
import "./shared/styles/fonts.css";
import "./shared/styles/typography.css";
import "./shared/styles/colors.css";
import "./shared/styles/index.css";
import App from "./app/App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/providers/store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
