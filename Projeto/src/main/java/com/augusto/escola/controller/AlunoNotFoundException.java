package com.augusto.escola.controller;


class AlunoNotFoundException extends RuntimeException {

  AlunoNotFoundException(Long id) {
    super("Could not find employee " + id);
  }
}