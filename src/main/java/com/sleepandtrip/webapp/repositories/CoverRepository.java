package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Cover;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "cover", path = "/cover")
public interface CoverRepository extends CrudRepository<Cover,Long> {}
