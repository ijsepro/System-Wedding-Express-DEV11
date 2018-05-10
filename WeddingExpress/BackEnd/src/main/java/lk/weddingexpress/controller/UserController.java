package lk.weddingexpress.controller;

import lk.weddingexpress.buisness.BOFactory;
import lk.weddingexpress.buisness.custom.UserBO;
import lk.weddingexpress.dto.UserDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


@Path("user")
public class UserController {
    private UserBO userBo;

    public UserController() {
        userBo = (UserBO) BOFactory.getInstance().getBO(BOFactory.BOTypes.USER);
    }

    @POST
    @Path("crt")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean createUser(UserDTO userDTO) {
        return userBo.save(userDTO);
    }

    @GET
    @Path("src")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean searchUser(String email) throws Exception {
        System.out.println("ssdasdasdsddddddddddddddddddddddd");
        return false;

    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("check")
    public boolean searchUser(UserDTO userDTO) {
        System.out.println(userDTO.getEmail());
        System.out.println("searched");

        UserDTO getUser = new UserDTO();
        try {
            getUser=userBo.search(userDTO.getEmail());

            if (getUser != null) {
                if (userDTO.getEmail().equals(getUser.getEmail()) && userDTO.getPassword().equals(getUser.getPassword())) {
                    System.out.println(true);

                    return true;
                } else {
                    System.out.println(false);
                    return false;
                }
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }
}




