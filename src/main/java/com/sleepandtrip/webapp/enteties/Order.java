package com.sleepandtrip.webapp.enteties;


import com.sleepandtrip.webapp.enteties.enums.OrderState;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;


/**
 * Класс определяет сущность заказа.
 *
 *
 */

@Entity
@Table(name = "ORDERS")
@ToString
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter
    @Setter
    private String Recipient; //TODO: Удалить на этапе дипломной работы

    @Getter
    @Setter
    @Column(name="PHONE")
    @Length(max=13,min=6)
    private String phone; //TODO: Move to OrderToPerson entity on STAGE 2

    @Getter
    @Setter
    @Length(max = 255)
    @Column(nullable = false)
    private String adress; //TODO: Move to OrderToPerson entity on STAGE 2

    @Getter
    @Setter
    @Column(name = "DELIVERYTYPE_ID", nullable = false)
    private Long deliveryTypeId;

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

    @ManyToOne
    @JoinColumn(name ="CANVAS_ID")
    private Canvas canvas;

    public Canvas getCanvas() {
        return canvas;
    }

    public void setCanvas(Canvas canvas) {
        this.canvas = canvas;
    }

    @ManyToOne
    @JoinColumn(name ="SACHE_ID")
    private Sache sache;

    public Sache getSache() {
        return sache;
    }

    public void setSache(Sache sache) {
        this.sache = sache;
    }


    @ManyToOne
    @JoinColumn(name ="COVER_ID")
    private Cover cover;

    public Cover getCover() {
        return cover;
    }

    public void setCover(Cover cover) {
        this.cover = cover;
    }


    @Getter
    @Setter
    @Column(name = "HAVEPATCH")
    private Boolean havePatch;

    @Getter
    @Setter
    @Column(name="ORDER_DATE",nullable = false )
    @Type(type="date")
    private Date orderDate;

    @Getter
    @Setter
    @Column(name="DONE_DATE")
    @Type(type="date")
    private String orderDoneDate;

    @Getter
    @Setter
    private Boolean payed;

    @Getter
    @Setter
    @Length(max= 150, min = 4)
    private String creator;

    @Getter
    @Setter
    @Column(name = "TRACKNUMBER")
    @Length(max = 100)
    private String trackNumber;


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
//    @Getter
//    @Setter
//    @Length(max = 255)
//    @Column(name = "LETTERINGURL")
//    private String letteringURL;

}


