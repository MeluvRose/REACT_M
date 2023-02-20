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

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation} 3s linear infinite;
  span {
    font-size: 48px;
    &:hover {
      font-size: 24px;
    } // span:hover
    &:active {
      opacity: 0;
    } // span:active
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <span>😁</span>
      </Box>
    </Container>
  );
}

export default App;
