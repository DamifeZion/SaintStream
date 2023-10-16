import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./features/store.js";
import ToastWrapper from "./components/toast/ToastWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ToastWrapper autoClose={2500} pauseOnHover={false} />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
