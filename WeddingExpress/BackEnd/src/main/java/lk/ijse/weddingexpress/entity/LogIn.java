package lk.ijse.weddingexpress.entity;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LogIn {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int logid;
    private int uid;
    private int vid;
    private String email;
    private String password;

    public LogIn() {
    }

    public LogIn(int logid) {
        this.logid = logid;
    }

    public LogIn(int logid, int uid, int vid, String email, String password) {
        this.logid = logid;
        this.uid = uid;
        this.vid = vid;
        this.email = email;
        this.password = password;
    }

    public int getLogid() {
        return logid;
    }

    public void setLogid(int logid) {
        this.logid = logid;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getVid() {
        return vid;
    }

    public void setVid(int vid) {
        this.vid = vid;
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
}
