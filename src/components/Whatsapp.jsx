import styled from "styled-components";
import whatsImg from "../assets/whats2.png"; 

const WhatsLink = styled.a`
    position: fixed;
    right:0;
    bottom: 0px;
    z-index: 1000;
`

const WhatsCard = styled.img`
    width: 70px;
   
    @media (max-width: 480px) {
        width: 30px;
    }
`;

export const Whats = () => {
    return (
        <WhatsLink href="https://wa.me/+5541989008598" target="_blank" rel="noopener noreferrer">
            <WhatsCard src={whatsImg} alt="WhatsApp Icon" />
        </WhatsLink>
    );
};
