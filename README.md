<head>
       <p><img src="https://img.shields.io/badge/status%20do%20projeto-concluído-green?style=for-the-badge&logo=appveyor"></p>
       <p>
       <img src="https://img.shields.io/badge/dependências-SpringBoot%3A%202.7.0-green">
       <img src="https://img.shields.io/badge/dependências-JDK%3A%2014.0.2.1-green">
       <img src="https://img.shields.io/badge/dependências-Hibernate%3A%205.4.21-green">
       <img src="https://img.shields.io/badge/dependências-PostgreSQL%20JDBC%3A%20PGADMIN.4-green">
       <img src="https://img.shields.io/badge/dependências-ModelMapper%20JDBC%3A%202.3.8-green">
       </p>
       <p>
       <img src="https://img.shields.io/badge/Technology-ReactNative-9cf">
       <img src="https://img.shields.io/badge/Technology-SQL-9cf">
       <img src="https://img.shields.io/badge/Technology-Java-9cf">
       <img src="https://img.shields.io/badge/Technology-JavaScript-9cf">
       </p>
</p>
</head>
<body>

--------------------------------------------------------------------------------------------------------------------
<p><h1>3F - Projeto de Enenergia Solar 🖥️ :</h1></p>
<h1 align="center">Bem Vindo ao projeto!</p> </h1> 

     
<h2>O desafio:</h2>
<p align="justify">O campo de tecnologia, que utiliza energia solar no Brasil está em crescimento contínuo. Existem diversos benefícios econômicos e ambientais que estão ajudando a impulsionar o crescimento desta fonte de energia renovável.
A utilização de energia solar tem sido utilizada como auxiliar na economia da conta de luz, na redução da sobrecarga de redes distribuidoras e na diminuição de impactos ambientais, seja em residências, estabelecimentos comerciais ou indústrias.
Energia solar é um termo que se refere à energia proveniente da luz e do calor do Sol. É utilizada por meio de diferentes tecnologias, como o aquecimento solar, a energia solar fotovoltaica, a energia heliotérmica, a arquitetura solar e a fotossíntese artificial. 
Uma última, mais não menos importante, vantagem da energia solar no Brasil para os consumidores de energia é o fato de que ela não sofre variação da inflação, devido sua matéria prima gratuita.
As vantagens da energia solar serviram de atrativo para consumidores e empresas fornecedoras de equipamentos. Estima-se que, em 2024, o território brasileiro contará com, aproximadamente, 887 mil sistemas de energia solar conectados à rede instalados, estabelecendo uma maior economia em relação às distribuidoras convencionais, além da manutenção e preservação ambiental do País. 
As empresas de energia solar dependem de sistemas para gerenciar seu funcionamento, assim como qualquer empresa do ramo de geração de energia, e ter um bom sistema de gerenciamento pode ser um grande diferencial, dado que muitas empresas deste tipo são consideradas de pequeno porte e não possuem um gerenciamento de suas atividades profissionalizado. Este é o caso da empresa F3 Energias Renováveis e Tecnologia Sustentável.
A F3 Energias Renováveis e Tecnologia Sustentável, ou simplesmente F3, é uma empresa terceirizada da empresa HCC, que é especializada em realizar procedimentos de implantação de energia solar em empresas, residências e entre outros. 
A disciplina referente à este trabalho, é Programação para Dispositivos Móveis.</p>

--------------------------------------------------------------------------------------------------------------------

<h2>Definição do problema:</h2>
<p align="justify">Por conta das atividades realizadas na captação de prospectos, a F3 enfrenta problemas diários, como o registro de usuários, de vendas, e cadastro de clientes. Isto porque a atividade de prospecção ainda é presencial.
O prospector, se desloca até a empresa ou residência que irá tentar realizar a venda e lá, realiza anotações em papeis ou até mesmo no telefone móvel. Isto faz com que as informações ficam alocadas em diversos lugares, que dificulta o processo de organização de sua agenda de visitas, retornos e registros, além da ausência de gráficos para comparações de diversos fatores e entre outros. 
Então, torna-se fundamental para a F3 a aquisição de um software, que auxilie a atividade de prospecção, gerenciamento e organização das principais atividades relacionadas ao tratamento de clientes da empresa.</p>

--------------------------------------------------------------------------------------------------------------------

<h2>Objetivo:</h2>
<p align="justify">O objetivo deste trabalho consiste em automatizar as vendas e prospecções por meio de uma aplicação para dispositivos móveis, visando facilitar o acesso às informações, e organização do dia a dia do prospector.
A aplicação que é proposta neste trabalho, irá facilitar o dia a dia da empresa, de uma forma rápida e padronizada de comunicação e auxílio ao funcionário em campo. e esses fatores tornam um sistema mobile ideal para resolver tal necessidade.</p>

--------------------------------------------------------------------------------------------------------------------

<h2>Desenvolvimento:</h2>
<p align="justify">A Figura 1 ilustra a arquitetura geral do sistema completo, onde:
<p>•   Só haverá um usuário e ele é o administrador do sistema.</p> 
<p>•   O sistema realiza cadastro de clientes.</p> 
<p>•   O sistema realiza consulta de clientes (Prospecções).</p> 
<p>•   O sistema realiza consulta de clientes (Vendas Realizadas).</p> </p> 
<p>•   O sistema possuí um calendário de visitas, para consulta simplificada de agenda diária.</p> 
<p>•   O sistema permite que seja realizado inserção e atualização de visitas.</p> 
<p>•   O sistema mostra o total de vendas, comparado ao total de clientes visitados.</p> 
<p>•   O sistema mostra gráfico mensal e anual de clientes visitados, para comparação.</p> 
<p>•   O sistema mostra gráfico mensal e anual de qual local vieram as prospecções.</p> 
<p>•    O sistema mostra gráfico mensal e anual de vendas e valores das vendas.</p> 
<p>•   O sistema gera arquivo Excel para que o usuário consiga inserir os dados no sistema web, da empresa.</p> 
<p>•   Mobile – O Front-end foi desenvolvido utilizando a linguagem React Native (implementação de JavaScript)</p> 
<p>•   Mobile – O Back-end foi desenvolvido utilizando a linguagem Java com implementação de Bootstrap. </p> 
<p>•   Mobile – Banco de Dados foi desenvolvido utilizando a linguagem SQL com implementação de Postgresql. </p> 

</p> 

## <h1 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Figura%201%20%E2%80%93%20Arquitetura%20geral%20do%20sistema_1.jpg)</h1> 


<h2>Modelo de Dados:</h2>
<p align="justify">A Figura 2 apresenta o modelo de dados do sistema, com as seguintes tabelas:

<p>•   Cod_adm – Armazena os dados de login: Os dados de login, são referentes a entrada de dados, login e senha de acesso;</p> 
<p>•   Cod_cli – Armazena os dados dos clientes: O usuário da aplicação, irá coletar todos os dados do cliente, podendo salvar os mesmos na base de dados;</p> 
<p>•   Cod_pessoa – Armazena os dados de clientes (pessoa física ou jurídica);</p> 
<p>•   Cod_agenda – Armazena os dados relativos as datas e horários de visitas: Usuário poderá consultar os agendamentos de visitas. Consulta por data ou Nome do Cliente ou empresa;</p> 
<p>•   Cod_calendario – Armazena os dados relativos a troca de data e horário de visitas: Usuário pode realizar troca de informações de sua agenda de visitas, de acordo com sua disponibilidade ou a do cliente;</p> 
<p>•   Cod_venda – Armazena os dados relacionados aos clientes que se tornaram venda: Quando o cliente do usuário, se tornar venda, ele continuará salvo no aplicativo, podendo o usuário, consultar os dados a qualquer momento;</p> 
<p>•   Cod_prospecção – Armazena os dados dos dados de clientes prospecção: Usuário poderá consultar os dados do cliente que realizou a visita a qualquer momento.</p> 

</p>

## <h2 align="center"> ![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/L%C3%B3gico_1.png) </h2>

<h2>Detalhes de desenvolvimento:</h2>
<p align="justify">O aplicativo Android, desenvolvido utilizando o Expo, pode ser resumido no diagrama de estrutura de regra de negócio da figura 3. Segue uma breve explicação sobre o funcionamento da Regra:


<p>•   Frontend – Ele representa a parte View da aplicação, onde o usuário terá a visualização das suas telas e poderá realizar todas as funcionalidades do sistema;</p>
<p>•   Backend – Responsável pela parte de integração entre o Frontend e o Banco de Dados. Ele possuiu as divisões de Controllers, Services e Repository, que são descritos abaixo:</p>
<p>1.  Controller – Controladores são objetos cujos métodos são responsáveis por tratar os dados de uma requisição HTTP, consultar ou alterar os dados necessários e retornar um resultado por meio de uma resposta adequadamente formatada.</p>
<p>2.  Services – Os Serviços se comunicam por meio de redes e podem ser combinados para a execução de operações complexas, utilizando principalmente o HTTP (Hyper Text Transfer Protocol), protocolo de comunicação responsável pela transferência de dados – inclusive de sons e imagens.</p>
<p>3.  Repository – Repositório é ser um serviço de domínio, que abstrai a camada de persistência da sua aplicação e atua como API para os serviços de aplicação, que são os controllers e services. </p>
<p>•   BD – Banco de dados da API descreve os tipos de dados do banco de dados e inclui a API para criar, excluir, localizar, atualizar e listar bancos de dados.</p>


</p>

## <h3 align="center"> ![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/MODELO%20API.png) </h3>

<h2>Comunicação entre telas.:</h2>
<p align="justify">A Figura 5 apresenta o trecho de código responsável pela conexão com a API e o envio de dados. O método de blocos utilizado pelo ReactNative, deixa a estrutura de código em uma visualização mais limpa. As linhas correspondentes, ficam dispostas da seguinte maneira.
<p>•   Linhas 1 até 14, correspondem as importações de cada tela.</p>
<p>•   Linhas 17 à 34, correspondem a códigos para realizar a navegação entre telas.</p>

</p>

## <h4 align="center"> ![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Figura5.PNG) </h4>

<h2>Funcionamento do APP:</h2>
<p align="justify">A Figura 6 apresenta o trecho de código responsável pela funcionalidade do APP e o envio de dados. O método de blocos utilizado pelo ReactNative, deixa a estrutura de código em uma visualização mais limpa. Na figura 5, apresentada, já cria os códigos principais. Na Figura 6, apenas apresentaremos o código APP.js. 
<p>As linhas correspondentes, ficam dispostas da seguinte maneira.</p>
<p>•   Linhas 1, corresponde a importações de pacotes;</p>
<p>•   Linha 2, corresponde a importação do pacote responsável pela navegação entre telas;</p>
<p>•   Linhas 3, corresponde a linha de importação das Rotas, onde foi inserido todas as telas;</p>
<p>•   Linha 6 a 14, corresponde a ação de execução do APP.</p>


</p>

## <h5 align="center"> ![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Figura6.PNG) </h5>

--------------------------------------------------------------------------------------------------------------------

<h2>O aplicativo.:</h2>
<p align="justify">As Figuras de 7 a 15 apresentam o aplicativo final, disponibilizado para uso pela empresa.  As mesmas, explicadas abaixo: 


<p>•   A Figura 7 apresenta a tela de Login: Representa a entrada do sistema. Usuário da aplicação é único, e possuirá, seu login e senha de acesso, para que não haja risco de invasão dos dados. </p>
<p>•   A Figura 8 apresenta o menu: A tela 8, apresenta a segunda tela da aplicação, onde o usuário possuí o menu, que redireciona o mesmo para a tela que precisará acessar no momento. </p>
<p>•   A Figura 9 apresenta a tela de Cliente Prospecção 1: A tela 9, representa a tela de consulta de clientes visitados. Nela, o usuário, digita o nome da empresa, ou pessoa, que realizou um cadastro anteriormente. Após incluir a informação, ele será redirecionado a tela, onde poderá verificar, todos os dados que inseriu do seu cliente visitado. </p>
<p>•   A Figura 10 apresenta a tela de Cadastro de Clientes: Representa a tela, onde o usuário irá realizar o cadastro do seu cliente visitado. Aqui preencherá todas as informações necessárias, para armazenamento de dados do cliente visitado.</p>
<p>•   A Figura 11 apresenta a tela de Cadastro de Clientes Venda: Representa a tela de consulta de clientes em que o usuário realizou a sua venda. Nela, o usuário, digita o nome da empresa, ou pessoa, que realizou um cadastro anteriormente. Após incluir a informação, ele será redirecionado a tela, onde poderá verificar, todos os dados que inseriu do cliente que realizou a venda. </p>
<p>•   A Figura 12 apresenta a tela de Calendário de Visitas: Representa a tela de consulta das datas de visitas aos seus clientes. Nela, o usuário, digita o nome da empresa, ou pessoa, que realizou um cadastro anteriormente. Nesta tela, o usuário também, pode realizar a pesquisa, através de datas, de visitas. Após incluir a informação, ele será redirecionado a tela 15, onde poderá alterar uma data ou hora de agendamento.</p>



</p>


## <h6 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/TelaLogin.jpeg)</h6>
## <h7 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Menu.jpeg)</h7>
## <h8 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/ClienteProspec%C3%A7%C3%A3o1.jpeg)</h8>
## <h9 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Cadastro1.jpeg)</h9>
## <h10 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Clientevenda1.jpeg)</h10>
## <h11 align="center">![](https://github.com/AnnaCMendes/Trabalho-Graduacao-2022/blob/master/APP/Assets/Calend%C3%A1rio2.jpeg)</h11>


--------------------------------------------------------------------------------------------------------------------

Referências:

[1] Spring MVC 4 - Framework Java para Aplicações Web MVC -  https://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html

[2] Bootstrap - Framework para Aplicações Web responsiva - https://v4-alpha.getbootstrap.com/getting-started/introduction

[3] JavaScript - Biblioteca de Funções JavaScript - https://www.javascript.com/

[4] Spring Data JPA - Abstarçaõ de Acesso a Dados - https://docs.spring.io/spring-data/jpa/docs/current/reference/html/

[5] Maven - Gestão de Builds e Dependências - https://maven.apache.org

[6] Tom Cat - Container Java Web - https://tomcat.apache.org/

[7] PostGreeSQL - Sistema de Gerenciamento de Banco de Dados - https://www.postgresql.org/

--------------------------------------------------------------------------------------------------------------------

# FRONT-END


### Pré-Requisitos
```sh
Node.js
Visual Studio Code
```

### Instalando React Native Expo:
React native expo allows test an application in mobile and browser using the expo go application through reading the qr code that is generated when the project runs


```sh
npm install -g expo-cli
```

### Instalando as dependências do Projeto:
 
```sh
npm install
```
###   Rodando a aplicação: 
```sh
npm start
```

--------------------------------------------------------------------------------------------------------------------
# backend


### Pré-Requisitos
```sh
JDK
Visual Studio Code - Instalações obrigatórias(Spring Boot Extension Pack, Extension Pack for Java )
Insomnia to test server URLs
PostgreeSQL - pgAdmin4
```

### Instalando as dependências do Projeto:

```sh
npm install
```

### Rodando a aplicação: 

```sh
npm run dev
```

#### Variáveis de ambiente de configuração:

```sh
#Porta do Servidor
server.port=8083

#Caminho para a conexão com o banco de dados
spring.datasource.url=jdbc:postgresql://localhost:5432/3F
#nome do usuário de conexão com o banco
spring.datasource.username=postgres
#senha de conexão com o banco
spring.datasource.password=1234
#Nome do Driver
spring.datasource.driver-class-name=org.postgresql.Driver
#Configuração especifica para o hibernate para gerar atualizações automaticas constantemente no shema.
spring.jpa.hibernate.ddl-auto=update
```
