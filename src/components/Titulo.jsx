import styled from "styled-components";
import PropTypes from "prop-types"; 

export const TituloDinamico = styled.h1`
  text-shadow: ${({ cor }) => cor || "#f5f5f5"} -0px 0px 47px;
  color: white;
  font-size: 37px;
  margin: 0px 0px 10px 0px;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    line-height:20px;
    /* padding: 15px; */
    font-size: 37px;
    color:white;
  }
`;

export const Titulo = ({ valor, cor, alt }) => {
  return <TituloDinamico cor={cor}>{valor}</TituloDinamico>;
};

Titulo.propTypes = {
  valor: PropTypes.string.isRequired,
  cor: PropTypes.string,
  alt: PropTypes.number,
};

Titulo.defaultProps = {
  cor: "#f5f5f5",
  alt: 0,
};

export default Titulo;
