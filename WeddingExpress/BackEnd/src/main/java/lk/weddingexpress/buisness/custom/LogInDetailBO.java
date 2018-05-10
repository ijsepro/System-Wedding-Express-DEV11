package lk.weddingexpress.buisness.custom;

import lk.weddingexpress.buisness.SuperBO;
import lk.weddingexpress.dto.LogInDetailDTO;

import java.util.List;

public interface LogInDetailBO extends SuperBO {

    public boolean saveLogInDetail (LogInDetailDTO logInDetailDTO);

    public List<LogInDetailDTO> getAll() throws Exception;
}
