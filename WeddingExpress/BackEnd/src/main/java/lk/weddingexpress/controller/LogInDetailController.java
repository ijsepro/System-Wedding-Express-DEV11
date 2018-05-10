package lk.weddingexpress.controller;

import lk.weddingexpress.buisness.BOFactory;
import lk.weddingexpress.buisness.custom.LogInDetailBO;
import lk.weddingexpress.dto.LogInDetailDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("logindetail")
public class LogInDetailController {
    LogInDetailBO logInDetailBO;

    public LogInDetailController() {
        logInDetailBO= (LogInDetailBO) BOFactory.getInstance().getBO(BOFactory.BOTypes.LOGINDETIAL);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<LogInDetailDTO> allLoginDetail() throws Exception {
        return logInDetailBO.getAll();
    }

    @Path("crt")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public boolean createLoginDetail(LogInDetailDTO logInDetailDTO){
        return logInDetailBO.saveLogInDetail(logInDetailDTO);
    }

    @Path("upt")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public boolean updateLoginDetail(LogInDetailDTO logInDetailDTO) throws Exception {
        return false;
    }

}
