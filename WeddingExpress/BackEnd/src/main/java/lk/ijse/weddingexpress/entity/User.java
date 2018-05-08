package lk.ijse.weddingexpress.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int uid;
    private String email;
    private String fullName;
    private String username;
    private String phoneNumber;
    private String password;

    public User() {}


    public User(int uid) {
        this.uid = uid;
    }

    public User(String email) {
        this.email = email;
    }

    public User(int uid, String email, String fullName, String username, String phoneNumber, String password) {
        this.uid = uid;
        this.email = email;
        this.fullName = fullName;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
