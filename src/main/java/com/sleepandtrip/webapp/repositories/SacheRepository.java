package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Sache;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(collectionResourceRel = "sache")
public interface SacheRepository extends JpaRepository<Sache, Long> {}
