package lk.weddingexpress.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LogInDTO {
    private int logid;
    private int uid;
    private int vid;
    private String email;
    private String password;

    public LogInDTO() {
    }

    public LogInDTO(int logid) {
        this.logid = logid;
    }

    public LogInDTO(int logid, int uid, int vid, String email, String password) {
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
