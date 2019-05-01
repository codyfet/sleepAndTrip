package com.sleepandtrip.webapp.enteties;


import com.sleepandtrip.webapp.enteties.enums.OrderState;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


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
    private String adress;
    @Getter
    @Setter
    @Column(name = "DELIVERYTYPEID", nullable = false)
    private Byte deliveryTypeId;
    @Getter
    @Setter
    @Column(nullable = true, name = "TRACKNUMBER") //TODO: Make nullable = false
    @Length(max = 100)
    private String trackNumber;
    @Getter
    @Setter
    @Column(name = "ORDERSTATE", nullable = false)
    private OrderState orderState;
    @Getter
    @Setter
    @Length(max = 150)
    private String comment;
    @Getter
    @Setter
    @Column(name = "FEEDBACKRANGE")
    @Length(max = 1)
    private Byte feedbackRange;
    @Getter
    @Setter
    @Column(name = "FEEDBACKCOMMENT")
    @Length(max = 255)
    private String feedbackComment;
    @Getter
    @Setter
    @Column(nullable = false)
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
    @Column(name = "CASETYPEID")
    private Long caseTypeId;
    @Getter
    @Setter
    @Column(name = "HAVEPATCH")
    private Boolean havePatch;
    @Getter
    @Setter
    @Length(max = 255)
    @Column(name = "LETTERINGURL")
    private String letteringURL;
}
