import styled from "styled-components";
import {Titulo as TituloExterior} from "./Titulo"
import { Card } from "./Card";

const Container = styled.div`
margin: 0px 51px;
display:flex;
gap:25px;
`
const Paragrafo = styled.p`
    color:white;
    margin:0px 0px 10px 0px;
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
const Article = styled.article`
display:flex;
flex-wrap: wrap;
flex-direction: row;
gap:10px;
margin:auto;
justify-content: center;
`
const Section = styled.section`
width:500px;
&.sectionForma{
    text-align:center;
}
`

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

export const Conteudo = ()=>{

    return(
            <Container>
                <Section className="sectionExp">
                    <TituloExterior  $valor="Experiências"/> 
                    <Titulo>Faster soluções em Tecnologias</Titulo>
                    <SubTitulo>Desenvolvedor web</SubTitulo>
                    <SubTitulo>abr de 2024, Atuando</SubTitulo>
                    <Paragrafo>
                        Sólida experiência no desenvolvimento e manutenção de aplicações web utilizando o ASP.NET Core, com foco na criação de APIs RESTful e serviços backend robustos. ampla vivência na implementação de soluções modulares baseadas em arquitetura de micro serviços, promovendo alta disponibilidade e desempenho das aplicações.
                        Atuando no design e desenvolvimento de integrações assíncronas com RabbitMQ, assegurando o processamento confiável de mensagens e a comunicação eficiente entre serviços. experiência na implementação de estratégias de acesso a dados com Entity Framework, utilizando consultas otimizadas e padrões de repositório para manipulação de bancos de dados relacionais.
                        Integração de soluções de autenticação e autorização utilizando Keycloak, com foco em segurança e conformidade com padrões modernos, como OpenID Connect e OAuth2. Também em ambientes containerizados com Docker, criando imagens customizadas para serviços e garantindo a portabilidade das soluções.
                        Aplicando boas práticas como injeção de dependência, testes automatizados e princípios SOLID no desenvolvimento com ASP.NET Core, sempre buscando entregar soluções alinhadas às necessidades do negócio e com alta qualidade técnica.
                    </Paragrafo>

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
                    <Titulo>Conduent</Titulo>
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
                <Section className="sectionForma">
                    <TituloExterior $valor="Formações"/>         
                    <Article>
                    {
                       cursos.map(
                        (c,index)=> <Card key={index} $autor={c.autor} $curso={c.curso}/>
                       )
                    }         
                    </Article>
                   
                </Section>
                <Section>
                <TituloExterior  $valor="Sobre mim"/>
                <Paragrafo>
                        Profissional com 5 anos de experiência em TI e Desenvolvimento de Software, com formação acadêmica em Análise e Desenvolvimento de Sistemas. Atuo em todo o ciclo de desenvolvimento de softwares e aplicações web, minhas principais habilidades.
                        Desenvolver e sustentar aplicações em C#, JavaScript, Python e frameworks como AspnetCore, NestJs, Django e Flask.
                        Criar modelos de dados com EntityFramework , Prisma e TypeOrm para operações de crud em SQLServer, MySQL e PostgreSQL.
                        Realizar migrações de banco de dados, garantindo consistência entre esquema e código  da aplicação.
                        Implementar autenticação e autorização para segurança de dados.
                        Conduzir testes unitários com  Xunit.
                        Identificar e implementar melhorias de desempenho, otimizando consultas e processamento.
                        Manter e atualizar código legado, solucionando bugs conforme requisitos do projeto.
                	    Monitorar e documentar processos, contribuindo para a melhoria contínua.
                	    Aplicar boas práticas de programação e metodologias ágeis no desenvolvimento.
                    </Paragrafo>
                </Section>
            </Container>
    )
}