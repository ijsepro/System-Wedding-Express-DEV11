package lk.weddingexpress.service;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.BOFactory;
import lk.weddingexpress.business.custom.UserBO;
import lk.weddingexpress.dto.UserDTO;


import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;

@Path("user")

public class UserService {

    private UserBO userBo;

    public UserService(){
        userBo= (UserBO) BOFactory.getInstance().getBO(BOFactory.BOTypes.USER);
    }

    @POST
    @Path("crt")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean createUser(UserDTO u){
        return userBo.save(u);
    }
}
