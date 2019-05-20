package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Delivery;
import com.sleepandtrip.webapp.repositories.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:8081")
public class DeliveryController {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @GetMapping(path = "/getDelivery")
    public List<Delivery> getDelivery(){


        return deliveryRepository.findByActivity(true);
    }

    @PostMapping(path = "/newDelivery")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity newDelivery(
            @RequestBody Delivery newDelivery
    ){
        //Delivery delivery = new Delivery();
        //TODO: Define delivery from body here
        deliveryRepository.save(newDelivery);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping(path = "/editDelivery")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity editDelivery(@RequestBody Delivery delivery){


        deliveryRepository.save(delivery);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

