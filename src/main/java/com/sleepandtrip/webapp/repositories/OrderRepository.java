package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Order;
import com.sleepandtrip.webapp.enteties.web.WebOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "order", path = "/order")
public interface OrderRepository extends CrudRepository<WebOrder, Long> {

}
