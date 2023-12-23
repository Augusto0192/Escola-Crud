import logo from './logo.svg';
import './App.css';
import AlunoAdd from './AlunoAdd';
import AlunoDelete from './AlunoDelete';
import AlunoEdit from './AlunoEdit';
import AlunoList from './AlunoList';
import { useEffect, useState } from 'react';

function App() {
  const [alunos, setAlunos] = useState([]);
  const addAluno = (aluno) =>{
    setAlunos([...alunos,aluno]);
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/alunos');
      if (!response.ok) {
        throw new Error(`Erro ao obter alunos: ${response.statusText}`);
      }

      const data = await response.json();
      setAlunos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AlunoList alunos={alunos}/>

      {/* Adicionando Aluno */}
      <AlunoAdd addAluno={addAluno}  />

      {/* Editando Aluno - substitua os valores nos props pelos dados reais do aluno */}
      <AlunoEdit alunoId={1} alunoNome="Nome do Aluno"/>

      {/* Excluindo Aluno - substitua o valor no prop alunoId pelo ID real do aluno */}
      <AlunoDelete alunoId={1} />
    </div>
  );
}

export default App;
