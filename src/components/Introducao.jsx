import styled, { keyframes } from "styled-components";
import LogoC from "../assets/logo.png";
import LogoR from "../assets/react.svg";
import LogoN from "../assets/node.png";

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  text-align: center;
  padding: 0px;
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0px;
`;

const ImgStyle = styled.img`
  width: 80px;
  height: auto;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 0.5em ${({ $hoverColor }) => $hoverColor || "#facc15"});
  }

  @media (prefers-reduced-motion: no-preference) {
    &#react {
      animation: ${logoSpin} infinite 20s linear;
    }
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const corTransicao = keyframes`
  0% { color: white; }
  50% { color: #141414; }
  100% { color: white; }
`;

const H1style = styled.h1`
  animation: ${corTransicao} 5s infinite;
  text-shadow: #f5f5f5 -0px 0px 47px;
  color: black;
  text-align: center;
  margin: 0px;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
`;

export const Introducao = () => {
  return (
    <DivStyle>
      <H1style>Desenvolvedor Full Stack</H1style>
      <ImgContainer>
        <ImgStyle src={LogoC} $hoverColor="white" />
        <ImgStyle src={LogoR} $hoverColor="white" id="react" />
        <ImgStyle src={LogoN} $hoverColor="white" />
      </ImgContainer>
    </DivStyle>
  );
};
