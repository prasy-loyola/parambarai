package com.github.prasyloyola.familytree.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class RelationshipWithDetails {

    @Id
    Integer id;
    String relationship;
    String p1_name;
    String p1_gender;
    Integer p1_id;
    String p1_stories;
    String p2_name;
    String p2_gender;
    Integer p2_id;
    String p2_stories;


}
