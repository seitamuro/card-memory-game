import { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 200px;
  height: 100px;
  align-content: center;
`;

interface CardInnerProps {
  isFlipped: boolean;
}

const CardInner = styled.div<CardInnerProps>`
  border: solid;
  border-radius: 10px;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  align-item: center;

  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "rotateY(0)")};
  &:hover {
    box-shadow: 0px 0px 10px 10px var(--shadow-color);
    transition: all 0.3s ease;
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <StyledCard onClick={() => setIsFlipped((prev) => !prev)}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>Front</CardFront>
        <CardBack>Back</CardBack>
      </CardInner>
    </StyledCard>
  );
};
