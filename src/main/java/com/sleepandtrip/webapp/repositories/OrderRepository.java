package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "order", path = "/order")
public interface OrderRepository extends JpaRepository<Order, Long> {

}
