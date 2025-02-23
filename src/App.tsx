import { IconType } from "react-icons";
import { FaChild, FaClock, FaSmile, FaWind } from "react-icons/fa";
import styled from "styled-components";
import "./App.css";
import { Card } from "./components/Card";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  gap: 10px;
`;

type CardData = {
  icon: IconType;
  arranged: boolean;
};

const createAndShuffleArray = (numbers: number[]): number[] => {
  // 指定された数を2回ずつ含む配列を作成
  const duplicatedArray = numbers.flatMap((num) => [num, num]);

  // Fisher-Yatesアルゴリズムを使用してシャッフル
  for (let i = duplicatedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [duplicatedArray[i], duplicatedArray[j]] = [
      duplicatedArray[j],
      duplicatedArray[i],
    ];
  }

  return duplicatedArray;
};

function App() {
  const iconList: IconType[] = [FaSmile, FaClock, FaChild, FaWind];

  const card_idx = createAndShuffleArray(
    Array.from({ length: iconList.length }, (_, i) => i)
  );

  const card_data: CardData[] = card_idx.map((idx) => {
    return {
      icon: iconList[idx],
      arranged: false,
    };
  });

  return (
    <div style={{ width: "80vw" }}>
      <CardContainer>
        {card_data.map((data, i) => (
          <Card key={i} back={<data.icon size={50} />} />
        ))}
      </CardContainer>
    </div>
  );
}

export default App;
