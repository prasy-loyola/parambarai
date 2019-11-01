package com.github.prasyloyola.familytree.controller;

import com.github.prasyloyola.familytree.model.Person;
import com.github.prasyloyola.familytree.model.PersonRepo;
import com.github.prasyloyola.familytree.model.Relationship;
import com.github.prasyloyola.familytree.model.RelationshipRepo;
import es.usc.citius.hipster.algorithm.Algorithm;
import es.usc.citius.hipster.algorithm.Hipster;
import es.usc.citius.hipster.graph.GraphBuilder;
import es.usc.citius.hipster.graph.GraphSearchProblem;
import es.usc.citius.hipster.graph.HipsterDirectedGraph;
import es.usc.citius.hipster.graph.HipsterGraph;
import es.usc.citius.hipster.model.problem.SearchProblem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mongo.embedded.DownloadConfigBuilderCustomizer;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class FamilyController {

    @Autowired
    RelationshipRepo relationshipRepo;

    @Autowired
    PersonRepo personRepo;
    private Double getWeight(String relationship){
        switch (relationship.toUpperCase()){
            case "PARENT":
            case "CHILD":
                return 1.0;
            case "SPOUSE":
                return 2.0;
            default:
                return 3.0;
        }
    }

    @GetMapping(path = "/api/shortestLink",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Person> getShortestLink(@Param("person1") Integer person1, @Param("person2") Integer person2){
        Iterable<Relationship> relationships =  relationshipRepo.findAll();
        GraphBuilder<Integer,Double> graphBuilder = GraphBuilder.<Integer, Double>create();

        relationships.forEach((r) -> {
            graphBuilder.connect(r.getPerson1()).to(r.getPerson2()).withEdge(getWeight(r.getRelationship()));
        });
        HipsterGraph<Integer,Double> hipsterGraph=graphBuilder.createUndirectedGraph();

        SearchProblem p = GraphSearchProblem
                .startingFrom(person1)
                .in(hipsterGraph)
                .takeCostsFromEdges()
                .build();


        Algorithm.SearchResult search = Hipster.createDijkstra(p).search(person2);

        System.out.println(search);

         if(search.getOptimalPaths().size() > 0){
             List<Integer> link = (List<Integer>) search.getOptimalPaths().get(0);
             return link.stream().map((p1) -> personRepo.findById(p1).orElse(null)).collect(Collectors.toList());
         }
         return  new ArrayList<>();
    }



}
