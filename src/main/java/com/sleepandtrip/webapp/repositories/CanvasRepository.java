package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Canvas;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "canvas", path = "/canvas")
public interface CanvasRepository extends CrudRepository <Canvas, Long> {
}
