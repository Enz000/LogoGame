import React, { useState } from "react";
import styled from "styled-components";
import DataLogo from "../utils/DataLogo";

const Card = () => {
  let [changeGame, setChangeGame] = useState(1);
  let [countImages, setCountImages] = useState(2);
  let [goodChoice, setGoodChoice] = useState("false");
  let id1 = DataLogo[`game${changeGame}`].response.image1;
  let id2 = DataLogo[`game${changeGame}`].response.image2;

  const handleLogo = (e) => {
    if (setGoodChoice() !== e.target.dataset.id) {
      console.log("mauvais");
    } else {
      console.log("bonjour");
    }
  };

  const handleNext = () => {
    setChangeGame(changeGame + 1);
    setCountImages(countImages + 1);
  };

  const handleRestart = () => {
    setChangeGame(1);
    setCountImages(2);
  };
  return (
    <>
      <TitleGame>{DataLogo[`game${changeGame}`].title}</TitleGame>
      <LogoContainer
        style={{
          pointerEvents: changeGame === 10 ? "none" : "",
          opacity: changeGame === 10 ? "0.5" : "1",
        }}
      >
        <Button onClick={handleLogo}>
          <ImageLogo
            src={DataLogo[`game${changeGame}`].images.image1}
            data-id={id1}
          />
        </Button>
        <Button onClick={handleLogo}>
          <ImageLogo
            src={DataLogo[`game${changeGame}`].images.image2}
            data-id={id2}
          />
        </Button>
      </LogoContainer>

      {changeGame < 10 ? (
        <NextButton
          onClick={handleNext}
          style={{ display: changeGame === 10 ? "none" : "" }}
        >
          Suivant
        </NextButton>
      ) : (
        <RestartButton onClick={handleRestart}>Rejouer</RestartButton>
      )}
    </>
  );
};

export default Card;

// Styled part

const LogoContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 80%;

  background-color: whitesmoke;
`;
const Button = styled.button`
  border: none;
  margin: none;
  padding: none;
  background: none;
  cursor: pointer;
`;
const ImageLogo = styled.img`
  border-radius: 20%;
  height: 250px;
`;
const TitleGame = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3.5rem;
  text-align: center;
`;
const NextButton = styled.button`
  font-size: 20px;
  border-radius: 20px;
  padding: 1rem;
  width: 200px;
  cursor: pointer;
  margin-top: 50px;
`;
const RestartButton = styled.button`
  font-size: 20px;
  border-radius: 20px;
  padding: 1rem;
  width: 200px;
  cursor: pointer;
  margin-top: 50px;
`;
const ResultText = styled.p``;
