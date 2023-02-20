import React from "react";
import styled, { keyframes } from "styled-components";
import Circle from "./circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="magenta" />
      <Circle bgColor="tomato" text="I'm here" />
    </div>
  );
}

export default App;
