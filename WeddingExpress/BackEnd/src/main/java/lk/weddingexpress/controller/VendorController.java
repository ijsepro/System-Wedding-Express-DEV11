package lk.weddingexpress.controller;

import lk.weddingexpress.business.BOFactory;
import lk.weddingexpress.business.custom.VendorBO;
import lk.weddingexpress.dto.VendorDTO;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("vendor")
public class VendorController {
    private VendorBO vendorBO;

    public VendorController(){
        vendorBO = (VendorBO) BOFactory.getInstance().getBO(BOFactory.BOTypes.VENDOR);
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("auth-vendor")
    public boolean searchVendor(VendorDTO vendorDTO) {
        try {
            System.out.println(vendorDTO.getEmail());

            System.out.println("searched vendor");

            VendorDTO getVendor = new VendorDTO();
            getVendor = vendorBO.search(vendorDTO.getEmail());

            if (getVendor != null) {
                if (vendorDTO.getEmail().equals(getVendor.getEmail()) && vendorDTO.getPassword().equals(getVendor.getPassword())) {
                    System.out.println(true);
                    return true;
                } else {
                    System.out.println(false);
                    return false;
                }
            }

        } catch (Exception e1) {
            e1.printStackTrace();
            return false;
        }
        return false;
    }

}
