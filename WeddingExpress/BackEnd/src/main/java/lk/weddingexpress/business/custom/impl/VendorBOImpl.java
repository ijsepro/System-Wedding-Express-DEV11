package lk.weddingexpress.business.custom.impl;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import lk.weddingexpress.business.custom.VendorBO;
import lk.weddingexpress.dto.VendorDTO;
import lk.weddingexpress.entity.Vendor;
import lk.weddingexpress.repository.RepositoryFactory;
import lk.weddingexpress.repository.custom.VendorRepository;
import lk.weddingexpress.resources.HibernateUtill;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;

public class VendorBOImpl implements VendorBO {
    private VendorRepository vendorRepository;

    public VendorBOImpl(){
        vendorRepository = (VendorRepository) RepositoryFactory.getInstance().getRepository(RepositoryFactory.RepositoryTypes.VENDOR);

    }

    @Override
    public boolean saveVendor(VendorDTO vendorDTO) {
        boolean result = false;

        try(Session session = HibernateUtill.getSessionFactory().openSession()){
            vendorRepository.setSession(session);
            session.beginTransaction();

            Vendor vendor = new Vendor();
            vendor.setVid(vendorDTO.getVid());
            vendor.setVname(vendorDTO.getVname());
            vendor.setAddress(vendorDTO.getAddress());
            vendor.setEmail(vendorDTO.getEmail());
            vendor.setPassword(vendorDTO.getPassword());

            result = vendorRepository.save(vendor);
            session.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<VendorDTO> getAll() throws Exception {
        try(Session session = HibernateUtill.getSessionFactory().openSession()) {
            vendorRepository.setSession(session);
            session.beginTransaction();

            List<Vendor> allVendor = vendorRepository.getAll();
            session.getTransaction().commit();
            if (allVendor != null) {
                List<VendorDTO> vendorDTOS = new ArrayList<>();

                for (Vendor a : allVendor) {
                    Vendor vendor = new Vendor();
                    vendor.setVid(a.getVid());
                    vendor.setVname(a.getVname());
                    vendor.setAddress(a.getAddress());
                    vendor.setEmail(a.getEmail());
                    vendor.setPassword(a.getPassword());
                }
                return vendorDTOS;
            } else {
                return null;
            }
        }
    }

    @Override
    public VendorDTO search(String email) throws Exception {
        try (Session session = HibernateUtill.getSessionFactory().openSession()) {
            System.out.println("Bo: check1 vendor" + email);
            vendorRepository.setSession(session);
            session.beginTransaction();


            List<Vendor> vendor = (List<Vendor>) session.createQuery("From Vendor where email ='" + email + "'").list();
            for (Vendor vendors : vendor
                    ) {
                if (vendors != null) {
                    if (vendors != null) {
                        VendorDTO vendorDTO = new VendorDTO();

                        vendorDTO.setVid(vendors.getVid());
                        vendorDTO.setVname(vendors.getVname());
                        vendorDTO.setEmail(vendors.getEmail());
                        vendorDTO.setAddress(vendors.getAddress());
                        vendorDTO.setPassword(vendors.getPassword());
                        vendorDTO.setCompany(vendors.getCompany());

                        return vendorDTO;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
            System.out.println("run query vendor");
            System.out.println(vendor);
            session.getTransaction().commit();
            return new VendorDTO();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }


    }
}
