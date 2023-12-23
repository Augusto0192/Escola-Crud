package com.augusto.escola.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.augusto.escola.entity.Aluno;

@Repository
public interface AlunoRepository extends CrudRepository<Aluno, Long> {
	

}
