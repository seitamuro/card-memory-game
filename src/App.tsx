import { useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("lightmode");
  }, []);

  return (
    <>
      <Card />
    </>
  );
}

export default App;
