import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0%;
  } 
  50% {
    transform:rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform:rotate(0deg);
    border-radius: 0%;
  }
`;

const Emoji = styled.span`
  font-size: 48px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation} 3s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 72px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji as="p">😁</Emoji>
      </Box>
      <Emoji>👾</Emoji>
    </Container>
  );
}

export default App;
