import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PokemonApp } from "./PokemonApp.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

// import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <PokemonApp />
    </Provider>
  </StrictMode>
);
