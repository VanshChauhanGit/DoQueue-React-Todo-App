import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import ClerkThemeProvider from "./components/ClerkThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ClerkThemeProvider>
        <App />
      </ClerkThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
