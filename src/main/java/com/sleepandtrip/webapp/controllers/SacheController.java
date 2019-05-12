package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Sache;
import com.sleepandtrip.webapp.repositories.SacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class SacheController {

    @Autowired
    private SacheRepository sacheRepository;

    @GetMapping(path = "/getSache")
    public List<Sache> getSache(){
        return (List<Sache>) sacheRepository.findAll();
    }
}
