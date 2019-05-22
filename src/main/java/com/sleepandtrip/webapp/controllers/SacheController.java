package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Sache;
import com.sleepandtrip.webapp.repositories.SacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:8081")
public class SacheController {

    @Autowired
    private SacheRepository sacheRepository;

    @GetMapping(path = "/getSache")
    public List<Sache> getSache(){
        return (List<Sache>) sacheRepository.findAll();
    }

    @PostMapping(path = "/newSache")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity newSache(
            @RequestBody Sache newSache
    ){
        sacheRepository.save(newSache);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
