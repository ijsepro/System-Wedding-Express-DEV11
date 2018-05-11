package lk.weddingexpress.business.custom;


import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.LogInDetailDTO;

import java.util.List;

public interface LogInDetailBO extends SuperBO {

    public boolean saveLogInDetail (LogInDetailDTO logInDetailDTO);

    public List<LogInDetailDTO> getAll() throws Exception;
}
