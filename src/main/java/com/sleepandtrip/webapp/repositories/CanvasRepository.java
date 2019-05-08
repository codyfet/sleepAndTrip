package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Canvas;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "canvas", path = "/canvas")
public interface CanvasRepository extends CrudRepository <Canvas, Long> {
}
