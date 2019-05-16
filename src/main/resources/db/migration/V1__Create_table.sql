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
    ID             bigint PRIMARY KEY AUTO_INCREMENT,
    RECIPIENT      varchar(150) not null, -- TODO: Move field to PERSON table on STAGE 2
    PHONE          varchar(13)  null,     -- TODO: Move field to PERSON table on STAGE 2
    ADRESS         varchar(255) not null, -- TODO: Move field to PERSONORDERS table on STAGE 2
    DELIVERYTYPEID bigint       null,
    CANVASID       bigint       null,
    SACHEID        bigint       null,
    COVERID        bigint       null,
    ORDERSTATE     varchar(15)  null,
    COMMENT        varchar(150) null,
    SUMM           float        null,
    HAVEPATCH      boolean      null,
    ORDER_DATE     date         null,
    DONE_DATE      date         null,
    TRACKNUMBER    varchar(100) null      -- TODO: Move field to PERSONORDERS table on STAGE 2

--  FEEDBACKRANGE   int(1)       null, -- TODO: Make on STAGE 2
--  FEEDBACKCOMMENT varchar(255) null, -- TODO: Make on STAGE 2
--  LETTERINGURL    varchar(255) null, -- TODO: Make on STAGE 2

);

CREATE TABLE PERSONORDERS --TODO: Do i need this table? I think that table helps when user will delete himself from system.
(
    ID       bigint PRIMARY KEY AUTO_INCREMENT,
    PERSONID bigint not null,-- FOREIGN KEY REFERENCES PERSON(ID),
    ORDERID  bigint not null --FOREIGN KEY REFERENCES ORDER(ID)
--     ,ADRESS varchar(255) not null,
--     TRACKNUMBER varchar(100) null,
--     PHONE varchar(13) null
);

CREATE TABLE CANVAS
(
    ID           bigint PRIMARY KEY AUTO_INCREMENT,
    NAME         varchar(32)  not null,
    COMPOSITION  varchar(100) null,
    PREVIEW_URL  varchar(255) not null,
    VIEW_URL     varchar(255) not null,
    COST         float        not null,
    IS_ARCHIEVED boolean      not null,
    IS_IN_STORE  boolean      not null

);

CREATE TABLE SACHE
(
    ID          bigint PRIMARY KEY AUTO_INCREMENT,
    NAME        varchar(32)  not null,
    DESCRIPTION varchar(255) not null,
    COST        float        not null,
    IS_IN_STORE boolean      not null
);

CREATE TABLE COVER
(
    ID          bigint primary key AUTO_INCREMENT,
    NAME        varchar(32)  not null,
    DESCRIPTION varchar(255) not null,
    COST        float        not null,
    IS_IN_STORE boolean      not null
);

CREATE TABLE DELIVERY
(
    ID           bigint PRIMARY KEY AUTO_INCREMENT,
    NAME         varchar(100) not null,
    PHONE        varchar(20)  not null,
    IS_ACTIVE    boolean      not null,
    MINIMAL_COST float        not null
);

