package lk.ijse.weddingexpress.buisness.custom;

import lk.ijse.weddingexpress.buisness.SuperBO;
import lk.ijse.weddingexpress.dto.LogInDetailDTO;

import java.util.List;

public interface LogInDetailBO extends SuperBO {

    public boolean saveLogInDetail (LogInDetailDTO logInDetailDTO);

    public List<LogInDetailDTO> getAll() throws Exception;
}
