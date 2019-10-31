package com.github.prasyloyola.familytree.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "relations")
public class Relationship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    int person1;
    int person2;
    String relationship;
}
