import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
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

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
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
      <Title>Title</Title>
      <Box>
        <Emoji as="p">😁</Emoji>
      </Box>
      <Emoji>👾</Emoji>
    </Container>
  );
}

export default App;
