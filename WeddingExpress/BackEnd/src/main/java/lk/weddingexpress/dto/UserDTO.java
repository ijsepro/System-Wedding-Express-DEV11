package lk.weddingexpress.dto;

public class UserDTO {

    private int uid;
    private String email;
    private String fullName;
    private String username;
    private String address;
    private String phoneNumber;
    private String aboutme;
    private String gender;
    private String partnerName;

    public UserDTO() {}

    public UserDTO(int uid) {
        this.uid = uid;
    }

    public UserDTO(int uid, String email, String fullName, String username, String address, String phoneNumber, String aboutme, String gender, String partnerName) {
        this.uid = uid;
        this.email = email;
        this.fullName = fullName;
        this.username = username;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.aboutme = aboutme;
        this.gender = gender;
        this.partnerName = partnerName;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAboutme() {
        return aboutme;
    }

    public void setAboutme(String aboutme) {
        this.aboutme = aboutme;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPartnerName() {
        return partnerName;
    }

    public void setPartnerName(String partnerName) {
        this.partnerName = partnerName;
    }
}
