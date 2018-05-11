package lk.weddingexpress.business.custom;

import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.UserDTO;

import java.util.List;

public interface UserBO extends SuperBO {

    public boolean save(UserDTO userDTO);

    public List<UserDTO> getAll() throws Exception;

    public UserDTO search(String email)throws Exception;
}
