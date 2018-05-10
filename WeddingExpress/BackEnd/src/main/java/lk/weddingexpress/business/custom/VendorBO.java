package lk.weddingexpress.buisness.custom;

import lk.weddingexpress.buisness.SuperBO;
import lk.weddingexpress.dto.VendorDTO;

import java.util.List;

public interface VendorBO extends SuperBO {
    public boolean saveVendor(VendorDTO vendorDTO);

    public List<VendorDTO> getAll() throws Exception;

}
