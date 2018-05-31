package lk.weddingexpress.business.custom;


import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.LogInDTO;

import java.util.List;

public interface LogInBO extends SuperBO {

    public boolean saveLogIn (LogInDTO logInDTO);

    public List<LogInDTO> getAll() throws Exception;
}
