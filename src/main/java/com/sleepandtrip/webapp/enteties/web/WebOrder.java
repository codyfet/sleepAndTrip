package com.sleepandtrip.webapp.enteties.web;

import com.sleepandtrip.webapp.enteties.enums.OrderState;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

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
public class WebOrder {

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
        @Enumerated(EnumType.STRING)
        @Column(name = "ORDERSTATE", nullable = false)
        private OrderState orderState;

        @Getter
        @Setter
        @Length(max = 150)
        private String comment;

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
        @Column(name="PHONE")
        private String phone;
}
