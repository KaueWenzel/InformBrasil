import React, { useState } from "react";
import "./App.css";

const dengueData = {
  "Centro-Oeste": {
    2023: { cases: 40641, incidence: 243.3 },
    2024: { cases: 205838, incidence: 1263.8 },
    states: {
      "Distrito Federal": {
        2023: { cases: 6861, incidence: 221.7 },
        2024: { cases: 118895, incidence: 4220.5 },
      },
      Goiás: {
        2023: { cases: 16234, incidence: 225.3 },
        2024: { cases: 72222, incidence: 1023.7 },
      },
      "Mato Grosso": {
        2023: { cases: 7058, incidence: 197.9 },
        2024: { cases: 8825, incidence: 241.2 },
      },
      "Mato Grosso do Sul": {
        2023: { cases: 10488, incidence: 369.4 },
        2024: { cases: 5896, incidence: 213.9 },
      },
    },
  },
  Nordeste: {
    2023: { cases: 18761, incidence: 32.5 },
    2024: { cases: 51439, incidence: 94.1 },
    states: {
      Alagoas: {
        2023: { cases: 473, incidence: 14.1 },
        2024: { cases: 990, incidence: 31.7 },
      },
      Bahia: {
        2023: { cases: 9704, incidence: 64.8 },
        2024: { cases: 32326, incidence: 228.7 },
      },
      Ceará: {
        2023: { cases: 2242, incidence: 24.3 },
        2024: { cases: 3213, incidence: 36.6 },
      },
      Maranhão: {
        2023: { cases: 1419, incidence: 19.8 },
        2024: { cases: 1809, incidence: 26.7 },
      },
      Paraíba: {
        2023: { cases: 1078, incidence: 26.6 },
        2024: { cases: 2511, incidence: 63.2 },
      },
      Pernambuco: {
        2023: { cases: 1082, incidence: 11.2 },
        2024: { cases: 4388, incidence: 48.4 },
      },
      Piauí: {
        2023: { cases: 1184, incidence: 36.0 },
        2024: { cases: 1784, incidence: 54.6 },
      },
      "Rio Grande do Norte": {
        2023: { cases: 1109, incidence: 31.1 },
        2024: { cases: 3142, incidence: 95.1 },
      },
      Sergipe: {
        2023: { cases: 470, incidence: 20.1 },
        2024: { cases: 1276, incidence: 57.8 },
      },
    },
  },
  Norte: {
    2023: { cases: 12464, incidence: 65.9 },
    2024: { cases: 26391, incidence: 152.1 },
    states: {
      Acre: {
        2023: { cases: 1630, incidence: 179.7 },
        2024: { cases: 6575, incidence: 792.1 },
      },
      Amapá: {
        2023: { cases: 165, incidence: 18.8 },
        2024: { cases: 2027, incidence: 276.3 },
      },
      Amazonas: {
        2023: { cases: 1834, incidence: 43.0 },
        2024: { cases: 8428, incidence: 213.8 },
      },
      Pará: {
        2023: { cases: 1835, incidence: 20.9 },
        2024: { cases: 5106, incidence: 62.9 },
      },
      Rondônia: {
        2023: { cases: 5994, incidence: 330.2 },
        2024: { cases: 1955, incidence: 123.7 },
      },
      Roraima: {
        2023: { cases: 19, incidence: 2.9 },
        2024: { cases: 279, incidence: 43.9 },
      },
      Tocantins: {
        2023: { cases: 987, incidence: 61.4 },
        2024: { cases: 2021, incidence: 133.7 },
      },
    },
  },
  Sudeste: {
    2023: { cases: 171329, incidence: 191.2 },
    2024: { cases: 791108, incidence: 932.4 },
    states: {
      "Espírito Santo": {
        2023: { cases: 30767, incidence: 748.9 },
        2024: { cases: 46229, incidence: 1205.9 },
      },
      "Minas Gerais": {
        2023: { cases: 73834, incidence: 344.8 },
        2024: { cases: 424179, incidence: 2065.3 },
      },
      "Rio de Janeiro": {
        2023: { cases: 5520, incidence: 31.6 },
        2024: { cases: 95700, incidence: 596.1 },
      },
      "São Paulo": {
        2023: { cases: 61208, incidence: 131.2 },
        2024: { cases: 225000, incidence: 506.5 },
      },
    },
  },
  Sul: {
    2023: { cases: 18239, incidence: 60.0 },
    2024: { cases: 179143, incidence: 598.5 },
    states: {
      Paraná: {
        2023: { cases: 13498, incidence: 116.4 },
        2024: { cases: 123288, incidence: 1077.4 },
      },
      "Rio Grande do Sul": {
        2023: { cases: 889, incidence: 7.8 },
        2024: { cases: 20031, incidence: 184.1 },
      },
      "Santa Catarina": {
        2023: { cases: 3852, incidence: 52.5 },
        2024: { cases: 35824, incidence: 470.8 },
      },
    },
  },
};

const dengueSevereData = {
  "Centro-Oeste": {
    2023: { severeCases: 561, deaths: 18 },
    2024: { severeCases: 2601, deaths: 122 },
    states: {
      "Distrito Federal": {
        2023: { severeCases: 96, deaths: 0 },
        2024: { severeCases: 1430, deaths: 78 },
      },
      Goiás: {
        2023: { severeCases: 236, deaths: 7 },
        2024: { severeCases: 947, deaths: 37 },
      },
      "Mato Grosso": {
        2023: { severeCases: 125, deaths: 4 },
        2024: { severeCases: 164, deaths: 4 },
      },
      "Mato Grosso do Sul": {
        2023: { severeCases: 104, deaths: 7 },
        2024: { severeCases: 60, deaths: 3 },
      },
    },
  },

  Nordeste: {
    2023: { severeCases: 265, deaths: 10 },
    2024: { severeCases: 491, deaths: 10 },
    states: {
      Alagoas: {
        2023: { severeCases: 12, deaths: 0 },
        2024: { severeCases: 14, deaths: 0 },
      },
      Bahia: {
        2023: { severeCases: 138, deaths: 5 },
        2024: { severeCases: 341, deaths: 6 },
      },
      Ceará: {
        2023: { severeCases: 19, deaths: 1 },
        2024: { severeCases: 14, deaths: 0 },
      },
      Maranhão: {
        2023: { severeCases: 51, deaths: 1 },
        2024: { severeCases: 43, deaths: 1 },
      },
      Paraíba: {
        2023: { severeCases: 2, deaths: 0 },
        2024: { severeCases: 10, deaths: 1 },
      },
      Pernambuco: {
        2023: { severeCases: 19, deaths: 1 },
        2024: { severeCases: 42, deaths: 2 },
      },
      Piauí: {
        2023: { severeCases: 7, deaths: 0 },
        2024: { severeCases: 11, deaths: 1 },
      },
      "Rio Grande do Norte": {
        2023: { severeCases: 11, deaths: 1 },
        2024: { severeCases: 16, deaths: 1 },
      },
      Sergipe: {
        2023: { severeCases: 6, deaths: 0 },
        2024: { severeCases: 5, deaths: 0 },
      },
    },
  },
  Norte: {
    2023: { severeCases: 101, deaths: 4 },
    2024: { severeCases: 201, deaths: 9 },
    states: {
      Acre: {
        2023: { severeCases: 26, deaths: 1 },
        2024: { severeCases: 98, deaths: 3 },
      },
      Amapá: {
        2023: { severeCases: 3, deaths: 0 },
        2024: { severeCases: 13, deaths: 2 },
      },
      Amazonas: {
        2023: { severeCases: 12, deaths: 0 },
        2024: { severeCases: 61, deaths: 1 },
      },
      Pará: {
        2023: { severeCases: 10, deaths: 0 },
        2024: { severeCases: 21, deaths: 0 },
      },
      Rondônia: {
        2023: { severeCases: 35, deaths: 4 },
        2024: { severeCases: 7, deaths: 0 },
      },
      Roraima: {
        2023: { severeCases: 1, deaths: 0 },
        2024: { severeCases: 6, deaths: 0 },
      },
      Tocantins: {
        2023: { severeCases: 14, deaths: 0 },
        2024: { severeCases: 8, deaths: 0 },
      },
    },
  },
  Sudeste: {
    2023: { severeCases: 933, deaths: 11 },
    2024: { severeCases: 4005, deaths: 29 },
    states: {
      "Espírito Santo": {
        2023: { severeCases: 272, deaths: 1 },
        2024: { severeCases: 383, deaths: 4 },
      },
      "Minas Gerais": {
        2023: { severeCases: 324, deaths: 2 },
        2024: { severeCases: 1205, deaths: 8 },
      },
      "Rio de Janeiro": {
        2023: { severeCases: 18, deaths: 0 },
        2024: { severeCases: 166, deaths: 1 },
      },
      "São Paulo": {
        2023: { severeCases: 319, deaths: 8 },
        2024: { severeCases: 3251, deaths: 16 },
      },
    },
  },
  Sul: {
    2023: { severeCases: 417, deaths: 6 },
    2024: { severeCases: 2675, deaths: 37 },
    states: {
      Paraná: {
        2023: { severeCases: 311, deaths: 2 },
        2024: { severeCases: 2345, deaths: 23 },
      },
      "Rio Grande do Sul": {
        2023: { severeCases: 20, deaths: 0 },
        2024: { severeCases: 251, deaths: 5 },
      },
      "Santa Catarina": {
        2023: { severeCases: 86, deaths: 4 },
        2024: { severeCases: 79, deaths: 9 },
      },
    },
  },
};

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDataType, setSelectedDataType] = useState("severe");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedState("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDataTypeChange = (event) => {
    setSelectedDataType(event.target.value);
  };

  const renderTable = () => {
    let data;
    if (selectedDataType === "cases") {
      data = dengueData;
    } else {
      data = dengueSevereData;
    }

    if (selectedRegion && selectedState) {
      const stateData = data[selectedRegion].states[selectedState];
      return (
        <table>
          <thead>
            <tr>
              <th>Ano</th>
              <th>
                {selectedDataType === "cases"
                  ? "Casos Prováveis"
                  : "Casos Graves"}
              </th>
              <th>
                {selectedDataType === "cases"
                  ? "Coeficiente de Incidência"
                  : "Óbitos por Dengue"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023</td>
              <td>{stateData[2023].cases ?? stateData[2023].severeCases}</td>
              <td>{stateData[2023].incidence ?? stateData[2023].deaths}</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>{stateData[2024].cases ?? stateData[2024].severeCases}</td>
              <td>{stateData[2024].incidence ?? stateData[2024].deaths}</td>
            </tr>
          </tbody>
        </table>
      );
    } else if (selectedRegion) {
      const regionData = data[selectedRegion];
      return (
        <table>
          <thead>
            <tr>
              <th>Ano</th>
              <th>
                {selectedDataType === "cases"
                  ? "Casos Prováveis"
                  : "Casos Graves"}
              </th>
              <th>
                {selectedDataType === "cases"
                  ? "Coeficiente de Incidência"
                  : "Óbitos por Dengue"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023</td>
              <td>{regionData[2023].cases ?? regionData[2023].severeCases}</td>
              <td>{regionData[2023].incidence ?? regionData[2023].deaths}</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>{regionData[2024].cases ?? regionData[2024].severeCases}</td>
              <td>{regionData[2024].incidence ?? regionData[2024].deaths}</td>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  const getStateName = () => {
    if (selectedState) {
      return selectedState;
    } else if (selectedRegion) {
      return "Total:";
    }
    return "";
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Previna-se contra Dengue</h1>
        <h4>
          Selecione a região e estado abaixo veja os dados geral do Brasil na
          luta contra dengue
        </h4>
        <div className="selector">
          <label>
            Selecione uma região:
            <select value={selectedRegion} onChange={handleRegionChange}>
              <option value="">Selecione</option>
              {Object.keys(dengueData).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>
          {selectedRegion && (
            <label>
              Selecione um estado:
              <select value={selectedState} onChange={handleStateChange}>
                <option value="">Geral</option>
                {Object.keys(dengueData[selectedRegion].states).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label>
            Selecione o tipo de dados:
            <select value={selectedDataType} onChange={handleDataTypeChange}>
              <option value="severe">Casos Graves e óbitos</option>
              <option value="cases">Casos Prováveis e Incidência</option>
            </select>
          </label>
        </div>
        <p>{getStateName()}</p>
        {renderTable()}
        <br></br>
        <br></br>
        <h2>GRÁFICO COEFICIENTE DE INSCIDÊNCIA</h2>
        <img className="image" src="./graph1.jpg" alt="Image1" />
        <br></br>
        <h2>GRÁFICO NUMEROS DE CASOS GRAVES E ÓBITOS</h2>
        <img className="image" src="./graph2.jpg" alt="Image2" />
        <br></br>
        <h2>GRÁFICO MAPA DE SOROTIPOS DE VIRUS INDICADOS PARA DENGUE</h2>
        <img className="image" src="./graph3.jpg" alt="Image3" />
        <br></br>
        <h2>COMO COMBATER A DENGUE?</h2>
        <img className="image" src="./Dengue-combate.jpg" alt="Image4" />
      </div>
      <div className="footer">
        <p>Fonte: Dados Reais obtidos E.s de acordo com o site: https://www.gov.br/saude</p>
        <h3>Todos os direitos reservados Kaue e Thiago 2024 </h3>
      </div>
    </div>
  );
}

export default App;
