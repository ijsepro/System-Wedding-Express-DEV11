package lk.weddingexpress.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class VendorDTO {
    private int vid;
    private String fname;
    private String userName;
    private String email;

    private String password;
    private String companyCategory;
    private String location;
    private String phone;


    public VendorDTO() {
    }

    public VendorDTO(int vid) {
        this.vid = vid;
    }

    public VendorDTO(int vid, String fname, String userName, String email, String password, String companyCategory, String location, String phone) {
        this.vid = vid;
        this.fname = fname;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.companyCategory = companyCategory;
        this.location = location;
        this.phone = phone;
    }

    public int getVid() {
        return vid;
    }

    public void setVid(int vid) {
        this.vid = vid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCompanyCategory() {
        return companyCategory;
    }

    public void setCompanyCategory(String companyCategory) {
        this.companyCategory = companyCategory;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "VendorDTO{" +
                "vid=" + vid +
                ", fname='" + fname + '\'' +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", companyCategory='" + companyCategory + '\'' +
                ", location='" + location + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
