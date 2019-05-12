package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Cover;
import com.sleepandtrip.webapp.enteties.Sache;
import com.sleepandtrip.webapp.repositories.CoverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:8081")
public class CoverController {

    @Autowired
    private CoverRepository coverRepository;

    @GetMapping(path = "/getCover")
    public List<Cover> getCover(){
        return (List<Cover>) coverRepository.findAll();
    }
}
