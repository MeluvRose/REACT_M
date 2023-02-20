import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: White;
  background-color: gray;
  border: 0;
  border-radius: 10px;
`;

const Input = styled.input.attrs({
  required: true,
  minLength: 10,
})`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Btn>Login</Btn>
      <Btn as="a">Login</Btn>
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
