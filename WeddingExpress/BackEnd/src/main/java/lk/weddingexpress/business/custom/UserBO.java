package lk.weddingexpress.business.custom;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.UserDTO;

import java.util.List;

public interface UserBO extends SuperBO{

    public boolean save(UserDTO userDTO);

    public List<UserDTO> getAll() throws Exception;

    public boolean update(UserDTO userDTO) throws Exception;

    public UserDTO getUsers(String email)throws Exception;
}
