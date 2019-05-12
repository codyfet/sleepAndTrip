package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Sache;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(collectionResourceRel = "sache")
public interface SacheRepository extends CrudRepository<Sache, Long> {}
