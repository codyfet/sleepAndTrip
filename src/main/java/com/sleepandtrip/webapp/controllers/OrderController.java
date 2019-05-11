package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Order;
import com.sleepandtrip.webapp.enteties.enums.OrderState;
import com.sleepandtrip.webapp.repositories.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/api", method = {RequestMethod.POST})
public class OrderController {


    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/order")
    @CrossOrigin(origins = "http://localhost:8081")

    public Order createOrder(
            @RequestParam(value="adress") String adress,
            @RequestParam(value="phone") String phone,
            @RequestParam(value="deliveryTypeId") String deliveryTypeId,
            @RequestParam(value="comment") String comment,
            @RequestParam(value="canvas") String canvas,
            @RequestParam(value="sache") String sache,
            @RequestParam(value="havePatch") String havePatch,
            @RequestParam(value="caseType") String caseType
    ){
    //public Order createOrder(@Valid @RequestBody Order order) {

//        logger.debug(adress);

        Order newOrder = new Order();
        newOrder.setAdress(adress);
        System.out.println(adress);
        newOrder.setPhone(phone);
        newOrder.setDeliveryTypeId(1L);
        newOrder.setComment(comment);
        newOrder.setCanvasId(1L);
        newOrder.setSacheId(1L);
        newOrder.setHavePatch(true);
        newOrder.setCaseTypeId(1L);
        newOrder.setOrderState(OrderState.CREATED);


        return orderRepository.save(newOrder);
    }
}
