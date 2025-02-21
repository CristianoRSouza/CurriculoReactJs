import styled from "styled-components"

const ItemCard = styled.div`
background-color: #1E2A38;
    width: 150px;
    height: 150px;
    border-radius: 6px;
    text-align: center;
    transition: 0.1s;
    &:hover {
        transform: translateY(-8px);
    }

    @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`
const TituloCurso = styled.h5`
    color:white;

    @media (max-width: 480px) {
    width: 100%;
    height: 30px;
    margin:0px;
    padding:0px;
    font-size:10px;
  }
`
const Paragrafo = styled.p`
    color:white;

    @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin:0px;
    padding:0px;
    font-size:10px;
  }
`


export const Card = ({ $autor, $curso }) => {
    return (
        <ItemCard>
            <TituloCurso>{$autor}</TituloCurso>
            <Paragrafo>{$curso}</Paragrafo>
        </ItemCard>
    );
};
