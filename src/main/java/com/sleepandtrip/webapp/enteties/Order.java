package com.sleepandtrip.webapp.enteties;


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
@Table(name = "ORDER")
@ToString
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;
    @Getter
    @Setter
    @Length(max=255)
    @Column(nullable = false)
    private String adress;
    @Getter
    @Setter
    @Column(name = "DELIVERYTYPEID", nullable = false)
    private int deliveryTypeId;
    @Getter
    @Setter
    @Column(nullable = true, name = "TRACKNUMBER")
    @Length(max=100)
    private String trackNumber;
    @Getter
    @Setter
    @Column(name = "ORDERSTATEID", nullable = false)
    private int orderState;
    @Getter
    @Setter
    @Length(max=150)
    private String comment;
    @Getter
    @Setter
    @Column(name="FEEDBACKRANGE")
    @Length(max=1)
    private int feedbackRange;
    @Getter
    @Setter
    @Column(name="FEEDBACKCOMMENT")
    @Length(max=255)
    private String feedbackComment;
    @Getter
    @Setter
    @Column(nullable = false)
    private Float summ;
    @Getter
    @Setter
    @Column(name="CANVASID")
    private long canvasId;
    @Getter
    @Setter
    @Column(name="SACHEID")
    private long sacheId;
    @Getter
    @Setter
    @Column(name="CASETYPEID")
    private long caseTypeId;
    @Getter
    @Setter
    @Column(name="HAVEPATCH")
    private boolean havePatch;
    @Getter
    @Setter
    @Length(max=255)
    @Column(name="LETTERINGURL")
    private String letteringURL;
}
