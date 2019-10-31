package com.github.prasyloyola.familytree.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface RelationshipWithDetailsRepo extends CrudRepository<RelationshipWithDetails,Integer> {

    @Query("SELECT r FROM RelationshipWithDetails r WHERE r.p1_id = :personId or r.p2_id = :personId")
    public List<RelationshipWithDetails> find(@Param("personId") Integer personId);
}
