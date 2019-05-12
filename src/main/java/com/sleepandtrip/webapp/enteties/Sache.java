package com.sleepandtrip.webapp.enteties;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SACHE")
public class Sache {

    @Id
    @Getter
    @Column(name="SACHEID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Getter
    @Setter
    private String name;
    @Getter
    @Setter
    private String description;
    @Getter
    @Setter
    @Column(name="IS_IN_STORE")
    private Boolean isInStore;

}
