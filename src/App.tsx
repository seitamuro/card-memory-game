import styled from "styled-components";
import "./App.css";
import { Card } from "./components/Card";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  gap: 10px;
`;

function App() {
  return (
    <div style={{ width: "80vw" }}>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </div>
  );
}

export default App;
