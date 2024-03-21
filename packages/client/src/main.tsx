import React from "react";
import ReactDOM from "react-dom/client";
import SuperTokens from "supertokens-auth-react";
import { App } from "./App.tsx";
import { supertokensConfig } from "./config/supertokens.ts";
import "@/css/index.css";

SuperTokens.init(supertokensConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
