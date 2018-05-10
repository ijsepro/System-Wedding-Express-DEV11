package lk.weddingexpress.controller;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.BOFactory;
import lk.weddingexpress.business.custom.UserBO;
import lk.weddingexpress.business.custom.UserDetailBO;
import lk.weddingexpress.dto.UserDTO;
import lk.weddingexpress.dto.UserDetailsDTO;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("user")
public class UserController {

    private UserBO userBo;


    public UserController(){
        userBo= (UserBO) BOFactory.getInstance().getBO(BOFactory.BOTypes.USER);

    }

    @POST
    @Path("crt")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean createUser(UserDTO userDTO){
        return userBo.save(userDTO);
    }

    @GET
    @Path("check")
    @Produces(MediaType.APPLICATION_JSON)
    public UserDTO getUsers(String email){
        System.out.println(""+email);
        return  userBo.getUsers(email);
    }

}
