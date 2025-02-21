import styled from "styled-components";

const Container = styled.div`
margin: 0px 51px;
display:flex;
justify-content:center;
align-content: center;
gap:25px;
color:white;
`

const Linha = styled.hr`
  margin: 0px;
  padding: 0px;
  border: 1px solid #ccc;
  width: 100%;
`;
const Paragrafo = styled.p`
    color:white;
    margin:0px 0px 0px 0px;

    @media (max-width: 480px) {
    width: 100%;
  }
`
const Section = styled.section`
width:500px;
&.sectionForma{
    text-align:center;
}
@media (max-width: 480px) {
    width: 100%;
    box-sizing: border-box; 
    overflow: hidden; 
  }
`
const TituloPrincipal = styled.h1`
color:white;
margin:0px;
font-size:18px;
margin-bottom:5px;
`


const Titulo = styled.h4`
color:white;
margin:0px;
font-size:18px;
`

const SubTitulo = styled.h3`
font-size:14px;
color:white;
margin:0px;
`



export const Experiencia = () => {
    return (
        <Container>
        <Section className="sectionExp">
            <TituloPrincipal> Experiências </TituloPrincipal>
            <Linha/>
            <Titulo>Faster soluções em Tecnologias</Titulo>
            <SubTitulo>Desenvolvedor web</SubTitulo>
            <SubTitulo>abr de 2024, Atuando</SubTitulo>
            <Paragrafo>
                Sólida experiência no desenvolvimento e manutenção de aplicações web utilizando o ASP.NET Core, com foco na criação de APIs RESTful e serviços backend robustos. ampla vivência na implementação de soluções modulares baseadas em arquitetura de micro serviços, promovendo alta disponibilidade e desempenho das aplicações.
                Atuando no design e desenvolvimento de integrações assíncronas com RabbitMQ, assegurando o processamento confiável de mensagens e a comunicação eficiente entre serviços. experiência na implementação de estratégias de acesso a dados com Entity Framework, utilizando consultas otimizadas e padrões de repositório para manipulação de bancos de dados relacionais.
                Integração de soluções de autenticação e autorização utilizando Keycloak, com foco em segurança e conformidade com padrões modernos, como OpenID Connect e OAuth2. Também em ambientes containerizados com Docker, criando imagens customizadas para serviços e garantindo a portabilidade das soluções.
                Aplicando boas práticas como injeção de dependência, testes automatizados e princípios SOLID no desenvolvimento com ASP.NET Core, sempre buscando entregar soluções alinhadas às necessidades do negócio e com alta qualidade técnica.
            </Paragrafo>
            <Linha/>
            <Titulo>Conduent</Titulo>
            <SubTitulo>Desenvolvedor de Software</SubTitulo>
            <SubTitulo>dez de 2022 - 2024 · 1 ano 2 meses</SubTitulo>
            <Paragrafo>
                Desenvolver e implementar soluções em C# e AspNetCore 2.2, utilizando Fluent API e Fluent Validation.
                Refatorar procedures e camadas do projeto.
                Integrar aplicações com Dapper e Entity Framework.
                Migrar projetos para NESTJS, utilizando Typescript e Prisma para criação de APIs.
                Implementar front-end com Vue.js e Bootstrap Vue.
                Documentar processos e procedimentos técnicos.
            </Paragrafo>
            <Linha/>
            <Titulo>Grupo Apisul </Titulo>
            <SubTitulo>Desenvolvedor de Software</SubTitulo>
            <SubTitulo>out de 2020 - nov de 2021 · 1 ano 2 meses</SubTitulo>
            <Paragrafo>
                Desenvolver e sustentar aplicações em Webforms, ASPNETMVC, C# e AspNetCore .
                Realizar a gestão de banco de dados SQL Server, incluindo modelagem, consultas e otimização de performance.
                Implementar soluções utilizando Dapper e Entity Framework para facilitar a interação com o banco de dados.
                Implementar testes de unidade e integração, para validar o funcionamento das funcionalidades desenvolvidas.
                Identificar e resolver bugs, realizando testes e validações para manter a estabilidade do sistema.
            </Paragrafo>
            <Linha/>
            <Titulo>Grupo Services</Titulo>
            <SubTitulo>Desenvolvedor Junior</SubTitulo>
            <SubTitulo>out de 2020 - nov de 2021 · 1 ano 2 meses</SubTitulo>
            <Paragrafo>
                Desenvolver aplicações em Node.js, criando e implementando novas funcionalidades.
                Realizar a configuração e suporte a um CRM.
                Identificar e consumir APIs para integrar sistemas, facilitando disparos em massa de SMS do tipo flash.
                Colaborar com a equipe para revisar e otimizar código.
                Realizar testes unitários e de integração para validar novas funcionalidades.
                Gerir tarefas utilizando ferramentas de controle de versão, como Git.
                Auxiliar na identificação e resolução de falhas e problemas técnicos.
            </Paragrafo>
            <Linha/>
            <Titulo>NHG</Titulo>
            <SubTitulo>Desenvolvedor de Software</SubTitulo>
            <SubTitulo>dez de 2022 - 2024 · 1 ano 2 meses</SubTitulo>
            <Paragrafo>
                Desenvolver features e corrigir bugs em sistemas de rastreamento de carga e controle de risco.
                Implementar testes de unidade para garantir a qualidade do código.
                Utilizar as tecnologias .NET, SQLServer, ReactJs, HTML, CSS e JavaScript para o desenvolvimento de aplicações web.
                Criar e manter serviços Windows para automação de processos.
                Gerenciar e otimizar consultas em bancos de dados SQLServer.
            </Paragrafo>
            </Section>
            </Container>
    )
 
}