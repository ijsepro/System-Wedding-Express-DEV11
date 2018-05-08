package lk.ijse.weddingexpress.buisness.custom;

import lk.ijse.weddingexpress.buisness.SuperBO;
import lk.ijse.weddingexpress.dto.LogInDTO;

import java.util.List;

public interface LogInBO extends SuperBO {

    public boolean saveLogIn (LogInDTO logInDTO);

    public List<LogInDTO> getAll() throws Exception;
}
