package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Order;
import com.sleepandtrip.webapp.enteties.enums.OrderState;
import com.sleepandtrip.webapp.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;


@RestController
@RequestMapping(value = "/api", method = {RequestMethod.POST})
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/newOrder")
    @CrossOrigin(origins = "http://localhost:8081")
    public Order createOrder(
            @RequestParam(value="adress") String adress,
            @RequestParam(value="phone") String phone,
            @RequestParam(value="deliveryType") Long deliveryType,
            @RequestParam(value="comment") String comment,
            @RequestParam(value="canvas") Long canvas,
            @RequestParam(value="sache") Long sache,
            @RequestParam(value="havePatch") Boolean havePatch,
            @RequestParam(value="cover") Long cover
    ){

        Order newOrder = new Order();

        newOrder.setAdress(adress);
        newOrder.setPhone(phone);
        newOrder.setDeliveryTypeId(deliveryType);
        newOrder.setComment(comment);
        newOrder.setCanvasId(canvas);
        newOrder.setSacheId(sache);
        newOrder.setHavePatch(havePatch);
        newOrder.setCoverId(cover);
        newOrder.setOrderDate(new Date());
        newOrder.setOrderState(OrderState.CREATED);


        return orderRepository.save(newOrder);
    }
}
