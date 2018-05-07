package lk.weddingexpress.controller;

import lk.weddingexpress.business.BOFactory;
import lk.weddingexpress.business.custom.UserDetailBO;
import lk.weddingexpress.dto.UserDetailsDTO;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by Thilini Hansika on 5/5/2018.
 */
@Path("userdetail")
public class UserDetaiController{

    private UserDetailBO userDetailBO;

    public  UserDetaiController(){
        userDetailBO= (UserDetailBO) BOFactory.getInstance().getBO(BOFactory.BOTypes.USERDETAIL);
    }
    @POST
    @Path("crt")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean createUserDetai(UserDetailsDTO userDetailsDTO)throws Exception{
        return userDetailBO.saveUserDetail(userDetailsDTO);
    }
}
