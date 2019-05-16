package com.sleepandtrip.webapp.controllers;

import com.sleepandtrip.webapp.enteties.Canvas;
import com.sleepandtrip.webapp.enteties.Cover;
import com.sleepandtrip.webapp.enteties.Delivery;
import com.sleepandtrip.webapp.enteties.Order;
import com.sleepandtrip.webapp.enteties.Sache;
import com.sleepandtrip.webapp.enteties.enums.OrderState;
import com.sleepandtrip.webapp.repositories.CanvasRepository;
import com.sleepandtrip.webapp.repositories.CoverRepository;
import com.sleepandtrip.webapp.repositories.DeliveryRepository;
import com.sleepandtrip.webapp.repositories.OrderRepository;
import com.sleepandtrip.webapp.repositories.SacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value = "/api", method = {RequestMethod.POST, RequestMethod.GET})
public class OrderController {

    private final Float PATCH_COST = 200f;
    private final OrderRepository orderRepository;
    private final DeliveryRepository deliveryRepository;
    private final CanvasRepository canvasRepository;
    private final SacheRepository sacheRepository;
    private final CoverRepository coverRepository;


    @Autowired
    public OrderController(OrderRepository orderRepository,
                           DeliveryRepository deliveryRepository,
                           CanvasRepository canvasRepository,
                           SacheRepository sacheRepository,
                           CoverRepository coverRepository) {

        this.orderRepository = orderRepository;
        this.deliveryRepository = deliveryRepository;
        this.canvasRepository = canvasRepository;
        this.sacheRepository = sacheRepository;
        this.coverRepository = coverRepository;
    }

    @GetMapping("/getAllOrders")
    @CrossOrigin(origins = "http://localhost:8081")
    public List<Order> getAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

    @PostMapping("/newOrder")
    @CrossOrigin(origins = "http://localhost:8081")
    public Order createOrder(
            @RequestParam(value = "recipient") String recipient,
            @RequestParam(value = "adress") String adress,
            @RequestParam(value = "phone") String phone,
            @RequestParam(value = "deliveryType") Long deliveryTypeId,
            @RequestParam(value = "comment") String comment,
            @RequestParam(value = "canvas") Long canvasId,
            @RequestParam(value = "sache") Long sacheId,
            @RequestParam(value = "havePatch") Boolean havePatch,
            @RequestParam(value = "cover") Long coverId
    ) {

        Order newOrder = new Order();

        newOrder.setRecipient(recipient);
        newOrder.setAdress(adress);
        newOrder.setPhone(phone);
        newOrder.setDeliveryTypeId(deliveryTypeId);
        newOrder.setComment(comment);
        newOrder.setCanvasId(canvasId);
        newOrder.setSacheId(sacheId);
        newOrder.setHavePatch(havePatch);
        newOrder.setCoverId(coverId);
        newOrder.setOrderDate(new Date());
        newOrder.setOrderState(OrderState.CREATED);


        Float summ = 1000.0f;

        if (deliveryTypeId != null) {
            Optional<Delivery> delivery = deliveryRepository.findById(deliveryTypeId);
            summ += delivery.map(Delivery::getMinimalCost)
                    .orElseThrow(() -> new RuntimeException("Стоимость доставки не указана"));
        }


        if (canvasId != null) {
            Optional<Canvas> canvas = canvasRepository.findById(canvasId);
            summ += canvas.map(Canvas::getCost)
                    .orElseThrow(() -> new RuntimeException("Стоимость материала не указана"));
        }

        if (sacheId != null) {
            Optional<Sache> sache = sacheRepository.findById(sacheId);
            summ += sache.map(Sache::getCost)
                    .orElseThrow(() -> new RuntimeException("Стоимость саше не указана"));
        }

        if (coverId != null) {
            Optional<Cover> cover = coverRepository.findById(coverId);
            summ += cover.map(Cover::getCost)
                    .orElseThrow(() -> new RuntimeException("Стоимость чехла не указана"));
        }

        if (havePatch) summ += PATCH_COST; // Если нужен патч, то прибавляем его стоимость к заказу

        newOrder.setSumm(summ);

        return orderRepository.save(newOrder);
    }


}
