import React, { useState } from 'react';

const preventionMethods = {
  "Eliminar focos de água parada": "Descrição sobre como eliminar focos de água parada...",
  "Usar repelente": "Descrição sobre o uso de repelente...",
  "Instalar telas em portas e janelas": "Descrição sobre a instalação de telas...",
  // Adicione mais métodos conforme necessário
};

const PreventionMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="information-container">
      <select onChange={e => setSelectedMethod(e.target.value)} defaultValue="">
        <option value="" disabled>Selecione um método de prevenção</option>
        {Object.keys(preventionMethods).map(method => (
          <option key={method} value={method}>{method}</option>
        ))}
      </select>
      {selectedMethod && (
        <div>
          <h2>{selectedMethod}</h2>
          <p>{preventionMethods[selectedMethod]}</p>
        </div>
      )}
    </div>
  );
};

export default PreventionMethods;
