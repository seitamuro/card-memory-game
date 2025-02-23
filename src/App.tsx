import { FaChild, FaClock, FaSmile, FaWind } from "react-icons/fa";
import styled from "styled-components";
import "./App.css";
import { Card } from "./components/Card";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  gap: 10px;
`;

function App() {
  const iconList = [
    <FaSmile size={50} />,
    <FaClock size={50} />,
    <FaChild size={50} />,
    <FaWind size={50} />,
  ];

  const icons = Array.from(
    { length: 16 },
    () => iconList[Math.round(Math.random() * iconList.length)]
  );

  return (
    <div style={{ width: "80vw" }}>
      <CardContainer>
        {icons.map((icon) => (
          <Card back={icon} />
        ))}
      </CardContainer>
    </div>
  );
}

export default App;
