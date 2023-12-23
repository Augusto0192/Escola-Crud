import React, { useState } from 'react';
import axios from 'axios';

const AlunoDelete = () => {
  const [alunoId, setAlunoId] = useState(''); // Adicione um estado para armazenar o ID do aluno a ser excluído

  const excluirAluno = () => {
    axios.delete(`http://localhost:8080/alunos/${alunoId}`)
      .then(response => {
        console.log('Aluno excluído com sucesso:', response.data);
        // Lógica adicional, se necessário (por exemplo, atualizar a lista de alunos)
      })
      .catch(error => console.error('Erro ao excluir aluno:', error));
  };

  return (
    <div>
      <h2>Excluir Aluno</h2>
      <input type="text" placeholder="ID do Aluno" value={alunoId} onChange={(e) => setAlunoId(e.target.value)} />
      <button onClick={excluirAluno}>Excluir</button>
    </div>
  );
};

export default AlunoDelete;
