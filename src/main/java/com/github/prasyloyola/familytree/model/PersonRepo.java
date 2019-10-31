package com.github.prasyloyola.familytree.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonRepo  extends CrudRepository<Person,Integer> {

}
