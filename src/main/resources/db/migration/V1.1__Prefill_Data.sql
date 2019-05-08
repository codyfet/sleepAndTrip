---Заполнение таблицы личностей
insert into PERSON (FIRSTNAME, SECONDNAME, PHONE, EMAIL, PREFERADRESS)
values ('Василий', 'Ветров', '+7(800)800-80-80', 'example@example.ru', 'г.Шмель, ул.Ясная поляна, дом 15, кв.148');
insert into PERSON (FIRSTNAME, SECONDNAME, PHONE, EMAIL, PREFERADRESS)
values ('Михаил', 'Пряников', '+7(900)900-90-90', 'exampl2e@examp2le.ru', 'г.Москва, ул.Лубянка, д.1, офис 42');
insert into PERSON (FIRSTNAME, SECONDNAME, PHONE, EMAIL, PREFERADRESS)
values ('Vas', 'Vetrov', '+7(800)800-80-80', 'example@example.ru', 'EXAMPLE');
insert into PERSON (FIRSTNAME, SECONDNAME, PHONE, EMAIL, PREFERADRESS)
values ('Михаил', 'Пряников', '+7(900)900-90-90', 'exampl2e@examp2le.ru', 'EXAMPLE2');


---Заполнение таблицы CANVAS
insert into CANVAS (NAME, COMPOSITION, PREVIEW_URL, VIEW_URL, COST, IS_ARCHIEVED, IS_IN_STORE)
values ('Хлебосоль', 'Хлопок 100%', 'first.jpg', 'bigfirst.jpg', 100, false, true);

insert into CANVAS (NAME, COMPOSITION, PREVIEW_URL, VIEW_URL, COST, IS_ARCHIEVED, IS_IN_STORE)
values ('Орегано', 'Хлопок 100%', 'first.jpg', 'bigfirst.jpg', 100, false, true);

insert into CANVAS (NAME, COMPOSITION, PREVIEW_URL, VIEW_URL, COST, IS_ARCHIEVED, IS_IN_STORE)
values ('Папоротник', 'Хлопок 100%', 'first.jpg', 'bigfirst.jpg', 200, false, true);

insert into CANVAS (NAME, COMPOSITION, PREVIEW_URL, VIEW_URL, COST, IS_ARCHIEVED, IS_IN_STORE)
values ('Печатница', 'Хлопок 100%', 'first.jpg', 'bigfirst.jpg', 300, false, true);


--- Заполнение таблицы заказов
insert into ORDERS (ADRESS, DELIVERYTYPEID, ORDERSTATE, SUMM, HAVEPATCH, ORDER_DATE, CANVASID)
values ('1', 1, 'DELIVERED', 50.0, TRUE, to_date('dd.mm.yyyy','01.01.2000'), 1);
insert into ORDERS (ADRESS, DELIVERYTYPEID, ORDERSTATE, SUMM, HAVEPATCH, ORDER_DATE)
values ('2', 1, 'PROCESS', 150.0, FALSE, to_date('dd.mm.yyyy','01.01.2000'));



