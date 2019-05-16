package com.sleepandtrip.webapp.enteties;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="DELIVERY")
public class Delivery {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    @Length(max = 100)
    private String name;

    @Getter
    @Setter
    @Length(max = 13)
    private String phone;

    @Getter
    @Setter
    @Column(name = "IS_ACTIVE")
    private Boolean isActive;

    @Getter
    @Setter
    @Column(name = "MINIMAL_COST")
    @NonNull
    private Float minimalCost;

}
