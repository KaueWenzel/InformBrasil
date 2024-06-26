# SISTEMA INFORME DENGUE

Este é um site onde os usuários podem consultar casos de dengue no Brasil, visualizar gráficos relacionados e aprender sobre formas de prevenção.

## Funcionalidades

- Consulta de casos de dengue por região e estado.
- Exibição de gráficos de coeficiente de incidência, número de casos graves e óbitos.
- Informações sobre como combater a dengue.

## Tecnologias Utilizadas

- React
- Chart.js
- D3.js
- React Simple Maps

![Alt text](/public/amostra.png)

## Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

- Node.js (versão recomendada: 14.x ou superior)
- npm (geralmente instalado junto com o Node.js)

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/informBrasil.git
   cd informBrasil

Instale as dependencias:
npm install

Inicie o projeto:
npm start

Acesse o projeto no navegador:

Abra o navegador e vá para http://localhost:3000.

Estrutura do Projeto

public/: Arquivos públicos do projeto, incluindo o index.html e imagens.
src/: Contém o código-fonte do projeto.
components/: Componentes React utilizados na aplicação.
data/: Dados estáticos utilizados pela aplicação.
App.js: Componente principal da aplicação.
index.js: Ponto de entrada da aplicação React.
styles/: Arquivos CSS para estilização da aplicação.
Dados
Os dados utilizados para consulta são armazenados em arquivos estáticos dentro da pasta src/data.

Imagens
As imagens dos gráficos e informações sobre prevenção estão localizadas na pasta public e são referenciadas no código-fonte.

Fonte de Dados
Os dados reais são obtidos de acordo com o site oficial do governo brasileiro: gov.br/saude.

Autores
Kaue
Thiago
Licença
Este projeto é licenciado sob os termos do MIT License.
