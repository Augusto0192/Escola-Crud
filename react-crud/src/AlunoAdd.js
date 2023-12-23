import React, { useState } from 'react';
import axios from 'axios';

const AlunoAdd = ({addAluno}) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const adicionarAluno = () => {
    axios.post('http://localhost:8080/alunos', { nome, idade, nota1, nota2 })
      .then(response => {
        console.log('Aluno adicionado com sucesso:', response.data);
        addAluno(response.data);
        })
      .catch(error => console.error('Erro ao adicionar aluno:', error));
  };

  return (
    <div>
      <h2>Adicionar Aluno</h2>
      Nome: <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      Idade: <input type="text" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
      1ºBi: <input type="text" placeholder="Nota1" value={nota1} onChange={(e) => setNota1(e.target.value)} />
      2ºBi: <input type="text" placeholder="Nota2" value={nota2} onChange={(e) => setNota2(e.target.value)} />
      <button onClick={adicionarAluno}>Adicionar</button>
    </div>
  );
};

export default AlunoAdd;
