package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Order;
import com.sleepandtrip.webapp.enteties.enums.OrderState;
import com.sleepandtrip.webapp.enteties.web.WebOrder;
import com.sleepandtrip.webapp.repositories.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("api/v1")
public class OrderController {


    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/neworder")
    @CrossOrigin(origins = "http://localhost:8081")

    public WebOrder createOrder(WebOrder model,
            @RequestParam(value="adress", name = "adress") String adress,
            @RequestParam(value="phone") String phone,
            @RequestParam(value="deliveryTypeId") String deliveryTypeId,
            @RequestParam(value="comment") String comment,
            @RequestParam(value="canvas") String canvas,
            @RequestParam(value="sache") String sache,
            @RequestParam(value="havePatch") Boolean havePatch,
            @RequestParam(value="caseType") String caseType
    ){
    //public Order createOrder(@Valid @RequestBody Order order) {

//        logger.debug(adress);

        WebOrder newOrder = new WebOrder();
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
