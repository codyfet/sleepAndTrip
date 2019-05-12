package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Canvas;
import com.sleepandtrip.webapp.repositories.CanvasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/api")
public class CanvasController {

    @Autowired
    private CanvasRepository canvasRepository;


    @GetMapping("/getCanvas")
    public List<Canvas> getAllCanvases() {
        return canvasRepository.findAll();
    }

}
