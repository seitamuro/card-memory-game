import styled from "styled-components";

const StyledCard = styled.div`
  border: solid;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  height: 100px;
  align-content: center;
`;

export const Card = () => {
  return (
    <StyledCard style={{ boxShadow: "0px 10px 10px 0px var(--shadow-color)" }}>
      Card Sample
    </StyledCard>
  );
};
