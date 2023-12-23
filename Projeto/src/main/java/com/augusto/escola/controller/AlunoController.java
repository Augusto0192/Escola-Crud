package com.augusto.escola.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.augusto.escola.entity.Aluno;
import com.augusto.escola.repository.AlunoRepository;

@RestController
@RequestMapping("alunos")
@CrossOrigin(origins = "http://localhost:3000")
public class AlunoController {
	@Autowired
	private AlunoRepository alunoRepository;
	
	@GetMapping
	public Iterable<Aluno> alunos() {
		return alunoRepository.findAll();
	}
	
	@PostMapping
	public Aluno newAluno(@RequestBody Aluno newAluno) {
	    return alunoRepository.save(newAluno);
	  }
	
	@GetMapping("/{id}")
	  public Aluno umAluno(@PathVariable Long id) {
	    
	    return alunoRepository.findById(id)
	    	.orElseThrow(() -> new AlunoNotFoundException(id));
	  }
	
	@PutMapping("/{id}")
	  public Aluno replaceAluno(@RequestBody Aluno newAluno, @PathVariable Long id) {
	    
	    return alunoRepository.findById(id)
	      .map(aluno -> {
	        aluno.setNome(newAluno.getNome());
	        aluno.setIdade(newAluno.getIdade());
	        aluno.setNota1(newAluno.getNota1());
	        aluno.setNota2(newAluno.getNota2());
	        return alunoRepository.save(aluno);
	      })
	      .orElseGet(() -> {
	        newAluno.setId(id);
	        return alunoRepository.save(newAluno);
	      });
	  }
	@DeleteMapping("/{id}")
	  public void deleteAluno(@PathVariable Long id) {
	    alunoRepository.deleteById(id);
	  }
	
	
	
}
