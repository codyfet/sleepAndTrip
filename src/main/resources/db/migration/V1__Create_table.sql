CREATE TABLE PERSON
(
    ID           bigint PRIMARY KEY AUTO_INCREMENT,
    FIRSTNAME    varchar(70)  null,
    SECONDNAME   varchar(70)  null,
    PHONE        varchar(20)  null,
    EMAIL        varchar(255) null,
    PREFERADRESS varchar(255) null
);

CREATE TABLE ORDERS
(
    ID              bigint PRIMARY KEY AUTO_INCREMENT,
    ADRESS          varchar(255) not null,
    DELIVERYTYPEID  int          not null,
    TRACKNUMBER     varchar(100) null,
    ORDERSTATE      varchar(15)  not null, --FOREIGN KEY REFERENCES ORDERSTATES(ID),
    COMMENT         varchar(150) null,
    FEEDBACKRANGE   int(1)       null,
    FEEDBACKCOMMENT varchar(255) null,
    SUMM            float        not null,
    CANVASID        int          null,
    SACHEID         int          null,
    CASETYPEID      int          null,
    HAVEPATCH       boolean      null,
    LETTERINGURL    varchar(255) null
);

CREATE TABLE PERSONORDERS --TODO: Do i need this table? I think that table helps when user will delete himself from system.
(
    PERSONORDERID bigint PRIMARY KEY AUTO_INCREMENT,
    PERSONID      bigint not null,-- FOREIGN KEY REFERENCES PERSON(ID),
    ORDERID       bigint not null --FOREIGN KEY REFERENCES ORDER(ID)
);


CREATE TABLE CANVAS
(
    CANVASID           int PRIMARY KEY AUTO_INCREMENT,
    CANVAS_PREVIEW_URL varchar(255) not null,
    CANVAS_VIEW_URL    varchar(255) not null,
    CANVAS_COST        float        null,
    IS_ARCHIEVED       boolean      not null,
    IS_IN_STORE        boolean      not null
);

CREATE TABLE DELIVERY
(
    DELIVERYTYPEID int PRIMARY KEY AUTO_INCREMENT,
    NAME           varchar(100) not null,
    PHONE          varchar(20)  not null,
    ISACTIVE       boolean      not null

)

