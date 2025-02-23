import styled from "styled-components";

const StyledCard = styled.div`
  border: solid;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  height: 100px;
  align-content: center;

  &:hover {
    box-shadow: 0px 0px 10px 10px var(--shadow-color);
    transition: all 0.3s ease;
  }
`;

export const Card = () => {
  return <StyledCard>Card Sample</StyledCard>;
};
