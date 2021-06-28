import React, { useState } from "react";
import styled from "styled-components";
import DataLogo from "../utils/DataLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
const Card = () => {
  // UseState part
  let [changeGame, setChangeGame] = useState(1);
  let [goodChoice, setGoodChoice] = useState("");
  let [cliked, setClicked] = useState(false);
  let id1 = DataLogo[`game${changeGame}`].response.image1;
  let id2 = DataLogo[`game${changeGame}`].response.image2;
  // React Style part
  const displayBtn = {
    pointerEvents: goodChoice === "" ? "none" : null,
    opacity: goodChoice === "" ? "0.5" : null,
  };

  // Event Part
  const handleChooseTheGoodLogo = (e) => {
    setClicked(true);
    if (e.target.dataset.id === "true") {
      setGoodChoice("true");
    } else {
      setGoodChoice("false");
    }
  };

  const handleNext = () => {
    setChangeGame(changeGame + 1);
    setGoodChoice("");
    setClicked(false);
  };

  const handleRestart = () => {
    setChangeGame(1);
    setGoodChoice("");
    setClicked(false);
  };

  // JSX part
  return (
    <>
      <TitleGame>{DataLogo[`game${changeGame}`].title}</TitleGame>
      <LogoContainer
        style={{
          pointerEvents: changeGame === 11 ? "none" : "",
          opacity: changeGame === 11 ? "0.5" : "1",
        }}
      >
        <Button onClick={handleChooseTheGoodLogo}>
          <ImageLogo
            src={DataLogo[`game${changeGame}`].images.image1}
            data-id={id1}
            style={{
              border:
                goodChoice === "true" && id1 === "true"
                  ? "3px solid green"
                  : goodChoice === "false" && id1 === "false"
                  ? "3px solid red"
                  : goodChoice === "false" && id2 === "false"
                  ? "3px solid green"
                  : "",
              opacity: cliked === true && id1 === "false" ? "0.2" : "",
            }}
          />
        </Button>
        {goodChoice === "true" ? (
          <ResultText>Bonne réponse !</ResultText>
        ) : goodChoice === "false" ? (
          <ResultText>Mauvaise Réponse </ResultText>
        ) : (
          ""
        )}
        <Button onClick={handleChooseTheGoodLogo}>
          <ImageLogo
            src={DataLogo[`game${changeGame}`].images.image2}
            data-id={id2}
            style={{
              border:
                goodChoice === "true" && id2 === "true"
                  ? "3px solid green"
                  : goodChoice === "false" && id2 === "false"
                  ? "3px solid red"
                  : goodChoice === "false" && id1 === "false"
                  ? "3px solid green"
                  : "",
              opacity: cliked === true && id2 === "false" ? "0.2" : "",
            }}
          />
        </Button>
      </LogoContainer>

      {changeGame < 10 ? (
        <NextButton
          onClick={handleNext}
          style={{
            display: changeGame === 11 ? "none" : "",
            ...displayBtn,
          }}
        >
          <span>
            <pre>
              Suivant &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </pre>
          </span>
        </NextButton>
      ) : (
        <RestartButton
          onClick={handleRestart}
          style={{
            ...displayBtn,
          }}
        >
          <span>
            <pre>
              Rejouer &nbsp;
              <FontAwesomeIcon icon={faRedoAlt} />
            </pre>
          </span>
        </RestartButton>
      )}
      <Footer />
    </>
  );
};

export default Card;

// Styled part

const LogoContainer = styled.div`
  min-height: 30vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 80%;
`;
const TitleGame = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const Button = styled.button`
  z-index: 50;
  border: none;
  background: none;

  position: relative;
  cursor: pointer;
`;

const ImageLogo = styled.img`
  height: 250px;

  border: solid 3px #a7a7a7;
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  transform: rotate(-1deg);
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transition: all 0.13s ease-in-out;
  :hover {
    transform: translateY(-10px) rotate(1deg);
    box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  }
`;

const NextButton = styled.button`
  margin-top: 1.5rem;
  background: #000;
  font-weight: 700;
  color: black;
  padding: 0;
  border-radius: 5px;
  width: 10%;
  font-size: 1rem;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    text-align: center;
    background: #a7a7a7;
    padding: 1.5rem 2rem;
    border: 1px solid #000;
    border-radius: 5px;
    transform: translate3d(-4px, -4px, 0);
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    :hover {
      transform: translate3d(-8px, -8px, 0);
    }
  }
`;
const RestartButton = styled(NextButton)``;
const ResultText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  margin-top: 1.5rem;
`;
