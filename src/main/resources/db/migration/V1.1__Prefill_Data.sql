insert into PERSON (FIRSTNAME, SECONDNAME, PHONE, EMAIL, PREFERADRESS)
values ('Василий', 'Ветров', '+7(800)800-80-80', 'example@example.ru', 'г.Шмель, ул.Ясная поляна, дом 15, кв.148');

insert into PERSON (FIRSTNAME, SECONDNAME, PHONE, EMAIL, PREFERADRESS)
values ('Михаил', 'Пряников', '+7(900)900-90-90', 'exampl2e@examp2le.ru', 'г.Москва, ул.Лубянка, д.1, офис 42');


-- INSERT INTO ORDERSTATE (ID, SYSTEMNAME, NAME)
-- VALUES (1, 'created', 'Создан');
-- INSERT INTO ORDERSTATE (ID, SYSTEMNAME, NAME)
-- VALUES (2, 'payed', 'Оплачен');
-- INSERT INTO ORDERSTATE (ID, SYSTEMNAME, NAME)
-- VALUES (3, 'process', 'Производится');
-- INSERT INTO ORDERSTATE (ID, SYSTEMNAME, NAME)
-- VALUES (4, 'sended', 'Отправлен');
-- INSERT INTO ORDERSTATE (ID, SYSTEMNAME, NAME)
-- VALUES (5, 'delivered', 'Получен');


insert into ORDERS (ADRESS, DELIVERYTYPEID, ORDERSTATE, SUMM, HAVEPATCH)
values ('1', 1, 'Delivered', 50.0, TRUE);
insert into ORDERS (ADRESS, DELIVERYTYPEID, ORDERSTATE, SUMM, HAVEPATCH)
values ('2', 1, 'Process', 150.0, FALSE);

--insert into CANVAS()


