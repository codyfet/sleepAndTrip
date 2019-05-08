package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Delivery;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "delivery", path = "/delivery")
public interface DeliveryRepository extends CrudRepository<Delivery, Long> {
}
