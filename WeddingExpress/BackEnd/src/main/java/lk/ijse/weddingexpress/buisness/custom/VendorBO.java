package lk.ijse.weddingexpress.buisness.custom;

import lk.ijse.weddingexpress.buisness.SuperBO;
import lk.ijse.weddingexpress.dto.VendorDTO;

import java.util.List;

public interface VendorBO extends SuperBO{
    public boolean saveVendor(VendorDTO vendorDTO);

    public List<VendorDTO> getAll() throws Exception;

}
