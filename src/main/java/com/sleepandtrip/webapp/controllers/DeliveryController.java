package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Delivery;
import com.sleepandtrip.webapp.repositories.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:8081")
public class DeliveryController {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @GetMapping(path = "/getDeliveryList")
    public List<Delivery> getDeliveryList(){
        return deliveryRepository.findByActivity(true);
    }

    @GetMapping("/getDelivery")
    public Delivery getDilevery(@RequestParam(value = "id") Long id){

        return deliveryRepository.findById(id).orElse(null);
    }

    @PostMapping(path = "/newDelivery")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity newDelivery(
            @RequestBody Delivery newDelivery
    ){
        deliveryRepository.save(newDelivery);

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    @PutMapping(path = "/editDelivery")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity editDelivery(@RequestBody Delivery delivery){
        deliveryRepository.save(delivery);

        return ResponseEntity.ok(HttpStatus.OK);
    }

}

