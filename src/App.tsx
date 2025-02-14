import { createGlobalStyle } from "styled-components";
import "./App.css";

interface GlobalStyleProps {
  backgroundColor: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${(props) => props.backgroundColor};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle backgroundColor="white" />
    </>
  );
}

export default App;
