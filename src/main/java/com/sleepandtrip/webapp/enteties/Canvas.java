package com.sleepandtrip.webapp.enteties;


import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "CANVAS")
public class Canvas {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private Set<Order> orderSet;

    @Getter
    @Setter
    @Length(max = 32)
    @Column(name = "NAME") //TODO: Make column Canvas preview URL nullable = false
    private String name;

    @Getter
    @Setter
    @Length(max=100)
    private String composition;

    @Getter
    @Setter
    @Length(max = 255)
    @Column(name = "CANVAS_PREVIEW_URL") //TODO: Make column Canvas preview URL nullable = false
    private String canvasPreviewURL;

    @Getter
    @Setter
    @Length(max = 255)
    @Column(name = "CANVAS_VIEW_URL") //TODO: Make column Canvas URL nullable = false
    private String canvasViewURL;

    @Getter
    @Setter
    @Column(name = "COST")
    private Float cost;

    @Getter
    @Setter
    @Column(name = "IS_ARCHIEVED", nullable = false)
    private Boolean isArchieved;

    @Getter
    @Setter
    @Column(name = "IS_IN_STORE", nullable = false)
    private Boolean isInStore;

}
