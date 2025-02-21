import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  background-color: black;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    /* align-items: start; */
  }
`;

const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 480px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: black;
    padding:0px;
    margin:0px;
  }
`;

const ItemStyled = styled(NavLink)`
  padding: 10px 30px;
  font-size: ${({ $font }) => $font || "40px"};
  font-family: "Bona Nova SC", serif;
  line-height: 33px;
  color: white;
  text-decoration: none;
  cursor: ${({ $mouse }) => $mouse || "pointer"};

  &:hover {
    color: gray;
  }

  &.active {
    font-weight: bold;
  }

  @media (max-width: 480px) {
    line-height: 16px;
    font-size: ${({ $font }) => $font || "20px"};
    color:white;
    padding: 5px 0px 0px 0px;
    margin: 0px 0px 0px 5px
  }
  
`;

export const Menu = () => {
  return (
    <NavStyled>
      <ListStyle $open={open}>
          <ItemStyled to="/" $font="17px" >Cristiano</ItemStyled>
      </ListStyle>
      <ListStyle $open={open}>
      
          <ItemStyled to="/experiencia" $font="17px" end >Experiências</ItemStyled> 
      
          <ItemStyled to="/formacoes" $font="17px">Formações</ItemStyled> 
      
          <ItemStyled to="/sobre" $font="17px">Sobre</ItemStyled> 
      </ListStyle>
    </NavStyled>
  );
};
