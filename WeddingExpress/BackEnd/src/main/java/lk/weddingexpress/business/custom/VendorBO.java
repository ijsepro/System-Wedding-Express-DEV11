package lk.weddingexpress.business.custom;

import lk.weddingexpress.business.SuperBO;
import lk.weddingexpress.dto.VendorDTO;

import java.util.List;

public interface VendorBO extends SuperBO {
    public boolean saveVendor(VendorDTO vendorDTO)throws Exception;


    public boolean register(VendorDTO vendorDTO) throws Exception;

    public List<VendorDTO> getAll() throws Exception;


    public VendorDTO search(String email)throws Exception;


}
