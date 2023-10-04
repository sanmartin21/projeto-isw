import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // URL da página que você deseja acessar
    const url = 'http://localhost:3001/api/data';

    // Faz a solicitação GET à página
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('A solicitação não foi bem-sucedida.');
        }
        return response.json(); // Supondo que o conteúdo da resposta seja JSON
      })
      .then(data => {
        console.log(data); // Exibe os dados no console
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // O array vazio [] garante que este efeito seja executado apenas uma vez após a montagem

  return (
    <div>
      {/* Conteúdo do componente React */}
    </div>
  );
}

export default App;

