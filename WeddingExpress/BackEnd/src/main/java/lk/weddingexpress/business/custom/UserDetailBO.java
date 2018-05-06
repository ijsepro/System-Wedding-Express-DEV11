package lk.weddingexpress.business.custom;

import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.UserDetailsDTO;

import java.util.List;

/**
 * Created by Thilini Hansika on 5/1/2018.
 */
public interface UserDetailBO extends SuperBO {

    public boolean saveUserDetail (UserDetailsDTO userDetailsDTO)throws Exception;

    public List<UserDetailsDTO> getAllUserDetail() throws Exception;

    public boolean updateUserdetail(UserDetailsDTO a) throws Exception;
}
