import styled from "styled-components";
import { Card } from "./Card";

const Container = styled.div`
  margin: 0px auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  margin: auto;
  color: white;

  @media (max-width: 480px) {
    max-width: 100%;
    margin:0px; 
  }
`;

const cursos = [
  { autor: "Digital House", curso: "Desenvolvimento Full Stack" },
  { autor: "FullCycle", curso: "Full Stack Full Cycle" },
  { autor: "FullCycle", curso: "Docker" },
  { autor: "FullCycle", curso: "Fundamentos de arquitetura de software" },
  { autor: "FullCycle", curso: "Domain-driven design (DDD)" },
  { autor: "FullCycle", curso: "SOLID Principles" },
  { autor: "Rocketseat", curso: "NodeJs" },
  { autor: "FullCycle", curso: "Clean Architecture" },
  { autor: "FullCycle Team", curso: "RabbitMQ Basics" },
  { autor: "FullCycle", curso: "Autenticação e Keycloak" },
  { autor: "FullCycle", curso: "API Gateway" },
  { autor: "Eduardo Pires", curso: "XUnit" }
];

export const Formacoes = () => {
  return (
    <Container>
      <Article>
        {cursos.map((c, index) => (
          <Card key={index} $autor={c.autor} $curso={c.curso} />
        ))}
      </Article>
    </Container>
  );
};
