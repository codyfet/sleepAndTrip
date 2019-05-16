package com.sleepandtrip.webapp.repositories;


import com.sleepandtrip.webapp.enteties.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "person", path = "/person")
interface PersonRepository extends CrudRepository<Person, Long> {

}
