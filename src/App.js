import React from "react";
import NavBar from "./components/NavBar";
import "./index.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import Todos from "./components/Todos";
import ThemeToggle from "./components/ThemeToggle";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
