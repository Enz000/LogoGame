import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <FooterFooter>
      <GithubBtn>
        <a
          href="https://github.com/Enz000/LogoGame"
          target="_blank"
          without
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </GithubBtn>
    </FooterFooter>
  );
};

export default Footer;

const FooterFooter = styled.footer`
  min-width: 100%;
  display: flex;

  flex-direction: row-reverse;
  padding-right: 50px;
`;
const GithubBtn = styled.button`
  border: none;
  background: none;
  font-size: 35px;
  cursor: pointer;
  color: #666666;
  transition: 0.3s all ease-out;
  :hover {
    transform: scale(1.2);
  }
  a {
    text-decoration: none;
    color: #666666;
  }
  a:hover {
    color: #424242;
  }
`;
