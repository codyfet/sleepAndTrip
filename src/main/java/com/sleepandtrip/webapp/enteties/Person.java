package com.sleepandtrip.webapp.enteties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PERSON")
@ToString
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;
    @Setter
    @Getter
    @Length(max = 70)
    @Column(nullable = true,name = "FIRSTNAME")
    private String firstName;
    @Setter
    @Getter
    @Length(max = 70)
    @Column(nullable = true,name = "SECONDNAME")
    private String secondName;
    @Setter
    //@Getter
    @Length(max = 20)
    @Column(nullable = true)
    private String phone;
    @Setter
    //@Getter
    @Length(max = 255)
    @Column(nullable = true)
    private String email;
    @Setter
    @Getter
    @Length(max = 255)
    @Column(nullable = true, name = "PREFERADRESS")
    private String preferAdress;


    public String getPhone(){
        return phone==null ? null : phone.replaceAll("[()\\s]+", "-").
                replaceAll("\\d(?=(?:\\D*\\d){4})", "*");
    }

    private String getUcncryptedPhone(){
        return phone;
    }

    public String getEmail() {
        return email==null ? null : email.replaceAll("[\\s]+","*")
                .replaceAll("\\S(?=(?:\\s*\\S){3,})", "*");
    }

    private String getEncryptedEmail(){
        return email;
    }
}
