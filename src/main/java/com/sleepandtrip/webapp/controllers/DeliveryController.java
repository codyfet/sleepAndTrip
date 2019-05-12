package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Delivery;
import com.sleepandtrip.webapp.repositories.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
        return (List<Delivery>) deliveryRepository.findAll();
    }


}

