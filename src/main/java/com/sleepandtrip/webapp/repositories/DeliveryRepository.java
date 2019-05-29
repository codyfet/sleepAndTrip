package com.sleepandtrip.webapp.repositories;

import com.sleepandtrip.webapp.enteties.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RepositoryRestResource(collectionResourceRel = "delivery", path = "/delivery")
public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

    @Query("select t from Delivery t where t.isActive = ?1")
    List<Delivery> findByActivity(Boolean isActive);

}
