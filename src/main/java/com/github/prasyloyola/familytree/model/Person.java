package com.github.prasyloyola.familytree.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String name;
    String stories;
    String gender;
}
