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
insert into ORDERS (ADRESS, DELIVERYTYPEID, ORDERSTATE, SUMM, HAVEPATCH, ORDER_DATE, CANVASID, PHONE )
values ('г.Тверь, пр-кт Ленина, д.10', 1, 'DELIVERED', 50.0, TRUE, to_date('dd.mm.yyyy','01.01.2000'), 1, '79201628841');
insert into ORDERS (ADRESS, DELIVERYTYPEID, ORDERSTATE, SUMM, HAVEPATCH, ORDER_DATE, PHONE )
values ('г.Тверь, ул.Нагорная', 1, 'PROCESS', 150.0, FALSE, to_date('dd.mm.yyyy','01.01.2000'), '79201628841');


insert into DELIVERY (NAME, PHONE, IS_ACTIVE) VALUES ('Почта России','+7(4822)39-41-91',TRUE);
insert into DELIVERY (NAME, PHONE, IS_ACTIVE) VALUES ('DHL','+7(4822)555-555',TRUE);
insert into DELIVERY (NAME, PHONE, IS_ACTIVE) VALUES ('DPD','8(800)777-3333',TRUE);
insert into DELIVERY (NAME, PHONE, IS_ACTIVE) VALUES ('Major express','8(920)454-4288',TRUE);

insert into COVER (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Деревянный кейс', 'Отличный кейс для человека с большим количеством полочек', true);
insert into COVER (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Тряпичный чехол', 'Хорошо подходит для путешествий', true);
insert into COVER (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Бумажный чехол', 'Сохранит запах саше надолго', true);

insert into SACHE (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Лаванда', 'успокоит', TRUE);
insert into SACHE (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Бадьян', 'восточный колорит', true);
insert into SACHE (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Душица', 'не оставит равнодушных', true);
insert into SACHE (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Лемонграс', 'взбодрится', true);
insert into SACHE (NAME, DESCRIPTION, IS_IN_STORE) VALUES ('Банан', 'ну тут и так всё понятно', true);

