package com.sleepandtrip.webapp.repositories;


import com.sleepandtrip.webapp.enteties.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(collectionResourceRel = "person", path = "/person")
interface PersonRepository extends CrudRepository<Person, Long> {
//    List<Person> list();
//    List<Person> findByFirstNameIgnoreCase(@Param("firstName") String firstName);
//    List<Person> findByEmailIgnoreCase(@Param("email") String email);
}
