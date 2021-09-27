import React from "react";
import styled from "styled-components";

function Section({title, description, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>Custom Orders</LeftButton>
          <RightButton>More Details</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
  background-image: ${props => `url("/images/${props.bgImage}")`}
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  padding-bottom: 40px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: #B3B3B3;
  color: black;
  font-family: sans-serif;
  height: 46px;
  width: 250px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  border-radius: 30px;
  font-weight: bold;
  color: yellow;
  cursor: pointer;
  margin: 12px;
  &:hover {
    color: white;
    opacity: 0.60;
  }
  
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  &:hover {
    color: green;
    opacity: 0.60;
  }
`;


const DownArrow = styled.img`
  height: 40px;
  padding-bottom: 30px;
  animation: move-chevron infinite 1.5s;

`;

const Button = styled.div`
`

