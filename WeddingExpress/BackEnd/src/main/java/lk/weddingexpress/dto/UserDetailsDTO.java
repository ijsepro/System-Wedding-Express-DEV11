package lk.weddingexpress.dto;

/**
 * @author lakitha
 */
public class UserDetailsDTO {
    private  int Id;
    private  String fullName;
    private  String userName;
    private String partenerName;
    private  String email;
    private String age;
    private String address;
    private String aboutMe;
    private UserDTO userDTO;


    public UserDetailsDTO(){}

    public UserDetailsDTO(int id) {
        Id = id;
    }

    public UserDetailsDTO(int id, String fullName, String userName, String partenerName, String email, String age, String address, String aboutMe, UserDTO userDTO) {
        Id = id;
        this.fullName = fullName;
        this.userName = userName;
        this.partenerName = partenerName;
        this.email = email;
        this.age = age;
        this.address = address;
        this.aboutMe = aboutMe;
        this.userDTO = userDTO;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPartenerName() {
        return partenerName;
    }

    public void setPartenerName(String partenerName) {
        this.partenerName = partenerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    @Override
    public String toString() {
        return "UserDetailsDTO{" +
                "Id=" + Id +
                ", fullName='" + fullName + '\'' +
                ", userName='" + userName + '\'' +
                ", partenerName='" + partenerName + '\'' +
                ", email='" + email + '\'' +
                ", age='" + age + '\'' +
                ", address='" + address + '\'' +
                ", aboutMe='" + aboutMe + '\'' +
                ", userDTO=" + userDTO +
                '}';
    }
}
