import React, { useState } from 'react';
import axios from 'axios';

const AlunoEdit = ({ onEdit }) => {
  const [alunoId, setAlunoId] = useState(''); // Adicione um estado para armazenar o ID do aluno a ser editado
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const buscarAlunoParaEditar = () => {
    axios.get(`http://localhost:8080/alunos/${alunoId}`)
      .then(response => {
        const aluno = response.data;
        setNome(aluno.nome);
        setIdade(aluno.idade);
        setNota1(aluno.nota1);
        setNota2(aluno.nota2);
      })
      .catch(error => console.error('Erro ao buscar aluno:', error));
  };

  const editarAluno = () => {
    axios.put(`http://localhost:8080/alunos/${alunoId}`, { nome, idade, nota1, nota2 })
      .then(response => {
        console.log('Aluno editado com sucesso:', response.data);
        onEdit(); // Chama a função de callback para atualizar a lista de alunos, se necessário
      })
      .catch(error => console.error('Erro ao editar aluno:', error));
  };

  return (
    <div>
      <h2>Editar Aluno</h2>
      <input type="text" placeholder="ID do Aluno" value={alunoId} onChange={(e) => setAlunoId(e.target.value)} />
      <button onClick={buscarAlunoParaEditar}>Buscar Aluno</button>
      Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Novo Nome" />
      Idade <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Nova Idade" />
      1ºBi: <input type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} placeholder="Nova Nota1" />
      2ºBi: <input type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} placeholder="Nova Nota2" />
      <button onClick={editarAluno}>Salvar</button>
    </div>
  );
};

export default AlunoEdit;
