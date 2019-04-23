create table PERSON
(
    ID           bigint PRIMARY KEY AUTO_INCREMENT,
    FIRSTNAME    varchar(70)  null,
    SECONDNAME   varchar(70)  null,
    PHONE        varchar(20)  null,
    EMAIL        varchar(255) null,
    PREFERADRESS varchar(255) null

);

create TABLE ORDERS
(
    ID              bigint PRIMARY KEY AUTO_INCREMENT,
    ADRESS          varchar(255) not null,
    DELIVERYTYPEID  int          not null,
    TRACKNUMBER     varchar(100) null,
    ORDERSTATEID    int          not null, --FOREIGN KEY REFERENCES ORDERSTATES(ID),
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

create table PERSONORDERS
(
    PERSONORDERID bigint PRIMARY KEY AUTO_INCREMENT,
    PERSONID      bigint not null,-- FOREIGN KEY REFERENCES PERSON(ID),
    ORDERID       bigint not null --FOREIGN KEY REFERENCES ORDER(ID)

);

create table ORDERSTATE
(
    ID         int         not null PRIMARY KEY,
    SYSTEMNAME varchar(16) not null,
    NAME       varchar(12) not null
);


CREATE TABLE CANVAS
(
    CANVASID    int PRIMARY KEY AUTO_INCREMENT,
    PICTUREURL  varchar(100) not null,
    BIGPICURL   varchar(100) not null,
    DESCRIPTION varchar(255) null,
    INSTOCK     boolean      not null,
    ARCHIEVED   boolean      not null

);
