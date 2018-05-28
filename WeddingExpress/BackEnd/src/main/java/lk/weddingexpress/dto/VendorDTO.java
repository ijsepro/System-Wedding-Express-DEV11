package lk.weddingexpress.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class VendorDTO {
    private int vid;
    private String vname;
    private String email;
    private String address;
    private String password;
    private String company;

    public VendorDTO() {
    }

    public VendorDTO(int vid) {
        this.vid = vid;
    }

    public VendorDTO(int vid, String vname, String email, String address, String password, String company) {
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
