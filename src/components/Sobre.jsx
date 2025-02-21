import styled from "styled-components"

const Section = styled.section`
color:white;
width:500px;
`

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragrafo = styled.p`
    color:white;
    margin:0px 0px 10px 5px;
`

export const Sobre = () => {

return(
    <Container>
        <Section>
            <Paragrafo>
            Profissional com 5 anos de experiência em TI e Desenvolvimento de Software, com formação acadêmica em Análise e Desenvolvimento de Sistemas. Atuo em todo o ciclo de desenvolvimento de softwares e aplicações web, minhas principais habilidades.
            Desenvolver e sustentar aplicações em <strong>C#</strong>, JavaScript, Python e frameworks como AspnetCore, NestJs, Django e Flask.
            Criar modelos de dados com <strong>EntityFramework , Prisma e TypeOrm </strong>para operações de crud em <strong>SQLServer, MySQL e PostgreSQL</strong>.
            Realizar migrações de banco de dados, garantindo consistência entre esquema e código  da aplicação.
            Implementar autenticação e autorização para segurança de dados.
            Conduzir testes unitários com  Xunit.
            Identificar e implementar melhorias de desempenho, otimizando consultas e processamento.
            Manter e atualizar código legado, solucionando bugs conforme requisitos do projeto.
            Monitorar e documentar processos, contribuindo para a melhoria contínua.
            Aplicar boas práticas de programação e metodologias ágeis no desenvolvimento.
            </Paragrafo>
            <hr/>
            <Paragrafo>
            Apaixonado pelo mundo de <strong>RPA</strong>, usando <strong>Python e PyAutoGui </strong> e outras bibliotecas. Tenho experiência também com <strong>React Native</strong> e total dominio do <strong>ReactJs</strong>.
            </Paragrafo>
        </Section>
    </Container>
 
)

}