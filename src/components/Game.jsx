import React, { useState, useEffect } from "react";
import DataLogo from "../utils/DataLogo";
import Card from "./Card";
import styled from "styled-components";
const Game = () => {
  return <Card />;
};

export default Game;

const Wrap = styled.div`
  background-color: blue;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
`;
