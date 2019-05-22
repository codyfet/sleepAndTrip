package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Canvas;
import com.sleepandtrip.webapp.enteties.Delivery;
import com.sleepandtrip.webapp.repositories.CanvasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:8081")
public class CanvasController {

    @Autowired
    private CanvasRepository canvasRepository;

    @GetMapping("/getCanvas")
    public List<Canvas> getAllCanvases() {
        return canvasRepository.findAll();
    }

    @PostMapping(path = "/newCanvas")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity newCanvas(
            @RequestBody Canvas newCanvas
    ){
        canvasRepository.save(newCanvas);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
