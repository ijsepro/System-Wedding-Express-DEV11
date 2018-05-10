package lk.weddingexpress.business.custom;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.UserDTO;

import java.util.List;

public interface UserBO extends SuperBO{

    public boolean save(UserDTO userDTO);

    public List<UserDTO> getAll() ;

    public boolean update(UserDTO userDTO);

    public UserDTO getUsers(String email);
}
