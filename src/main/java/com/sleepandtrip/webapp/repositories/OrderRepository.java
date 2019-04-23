package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "order", path = "/order")
public interface OrderRepository extends CrudRepository<Order, Long> {

}
