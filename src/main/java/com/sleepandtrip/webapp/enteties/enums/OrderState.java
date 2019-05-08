package com.sleepandtrip.webapp.enteties.enums;

public enum OrderState {
    //TODO: Defind oreder states


    CREATED     ("Создан"),
    PAYED       ("Оплачен"),
    PROCESS     ("Производится"),
    SENDED      ("Отправлен"),
    DELIVERED   ("Получен");

    private String title;

    OrderState(String title){
        this.title = title;
    }

    public String getTitle(){
        return title;
    }

    @Override
    public String toString(){
        return title;
    }
}


