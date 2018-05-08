package lk.ijse.weddingexpress.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vid;
    private String vname;
    private String email;
    private String address;
    private String password;
    private String company;

    public Vendor() {
    }

    public Vendor(int vid) {
        this.vid = vid;
    }

    public Vendor(int vid, String vname, String email, String address, String password, String company) {
        this.vid = vid;
        this.vname = vname;
        this.email = email;
        this.address = address;
        this.password = password;
        this.company = company;
    }

    public int getVid() {
        return vid;
    }

    public void setVid(int vid) {
        this.vid = vid;
    }

    public String getVname() {
        return vname;
    }

    public void setVname(String vname) {
        this.vname = vname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}
