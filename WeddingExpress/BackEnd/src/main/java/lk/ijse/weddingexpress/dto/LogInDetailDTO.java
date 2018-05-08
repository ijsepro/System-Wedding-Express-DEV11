package lk.ijse.weddingexpress.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LogInDetailDTO {
    private int logdetailid;
    private int logid;
    private String date;
    private String time;

    public LogInDetailDTO() {
    }

    public LogInDetailDTO(int logdetailid) {
        this.logdetailid = logdetailid;
    }

    public LogInDetailDTO(int logdetailid, int logid, String date, String time) {
        this.logdetailid = logdetailid;
        this.logid = logid;
        this.date = date;
        this.time = time;
    }

    public int getLogdetailid() {
        return logdetailid;
    }

    public void setLogdetailid(int logdetailid) {
        this.logdetailid = logdetailid;
    }

    public int getLogid() {
        return logid;
    }

    public void setLogid(int logid) {
        this.logid = logid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
