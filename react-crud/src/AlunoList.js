import React, { useState, useEffect } from 'react';

const AlunoList = ({alunos}) => {
  
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno.id}>{aluno.nome} {aluno.idade} anos, 1ºBi: {aluno.nota1} - 2ºBi:{aluno.nota2} - Média Final: {(aluno.nota1+aluno.nota2)/2}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
