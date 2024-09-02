import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoApp } from "./TodoApp.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

// import App from "./App.jsx";
// import { PokemonApp } from "./PokemonApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </StrictMode>
);
