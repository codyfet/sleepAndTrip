package com.sleepandtrip.webapp.enteties;


import com.sleepandtrip.webapp.enteties.enums.OrderState;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Required;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "ORDERS")
@ToString
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    @Length(max = 255)
    @Column(nullable = false)

    private String adress; //TODO: Move to OrderToPerson entity on STAGE 2

    @Getter
    @Setter
    @Column(name = "DELIVERYTYPEID", nullable = false)
    private Long deliveryTypeId;

    @Getter
    @Setter
    @Column(name = "TRACKNUMBER")
    @Length(max = 100)
    private String trackNumber;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "ORDERSTATE", nullable = false)
    private OrderState orderState;

    @Getter
    @Setter
    @Length(max = 150)
    private String comment;

    @Getter
    @Setter
    //@Column(nullable = false)
    private Float summ;

    @Getter
    @Setter
    @Column(name = "CANVASID")
    private Long canvasId;

    @Getter
    @Setter
    @Column(name = "SACHEID")
    private Long sacheId;

    @Getter
    @Setter
    @Column(name = "COVERID")
    private Long coverId;

    @Getter
    @Setter
    @Column(name = "HAVEPATCH")
    private Boolean havePatch;

    @Getter
    @Setter
    @Length(max = 255)
    @Column(name = "LETTERINGURL")
    private String letteringURL;

    @Getter
    @Setter
    @Column(name="ORDER_DATE",nullable = false )
    private Date orderDate;

    @Getter
    @Setter
    @Column(name="DONE_DATE")
    private String orderDoneDate;

    @Getter
    @Setter
    @Column(name="PHONE")
    @Length(max=13,min=6)
    private String phone;

//    @Getter
//    @Setter
//    @Column(name = "FEEDBACKRANGE")
//    @Length(max = 1)
//    private Byte feedbackRange;
//    @Getter
//    @Setter
//    @Column(name = "FEEDBACKCOMMENT")
//    @Length(max = 255)
//    private String feedbackComment;


}


