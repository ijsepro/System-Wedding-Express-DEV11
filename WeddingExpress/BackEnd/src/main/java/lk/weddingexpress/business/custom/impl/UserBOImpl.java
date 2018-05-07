package lk.weddingexpress.business.custom.impl;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.custom.UserBO;
import lk.weddingexpress.dto.UserDTO;
import lk.weddingexpress.entity.User;
import lk.weddingexpress.repository.RepositoryFactory;
import lk.weddingexpress.repository.custom.UserRepository;
import lk.weddingexpress.resources.HibernateUtill;
import org.hibernate.Session;

import java.util.List;

public class UserBOImpl implements UserBO {

    private UserRepository userRepository;


    public UserBOImpl(){

        userRepository= (UserRepository) RepositoryFactory.getInstance().getRepository(RepositoryFactory.RepositoryTypes.USER);

    }

    @Override
    public boolean save(UserDTO u) {
        boolean result=false;
        try(Session session = HibernateUtill.getSessionFactory().openSession()){
            userRepository.setSession(session);
            session.beginTransaction();
            User user=new User();
            user.setEmail(u.getEmail());
            user.setFullName(u.getFullName());
            user.setPhoneNumber(u.getPhoneNumber());
            user.setPassword(u.getPassword());
            user.setUsername(u.getUsername());
            result = userRepository.save(user);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<UserDTO> getAll() throws Exception {
        return null;
    }

    @Override
    public boolean update(UserDTO userDTO) throws Exception {
        return false;
    }

    @Override
    public UserDTO getUsers(String email) throws Exception {
     try   (Session session=HibernateUtill.getSessionFactory().openSession()) {
         userRepository.setSession(session);
         session.beginTransaction();

         User user = (User) session.createQuery("select * from user where email='" + email + "'").list().get(0);
         UserDTO userDTO = new UserDTO();
         userDTO.setUid(user.getUid());
         userDTO.setEmail(user.getEmail());
         userDTO.setFullName(user.getFullName());
         userDTO.setPassword(user.getPassword());
         userDTO.setPhoneNumber(user.getPhoneNumber());
         session.getTransaction().commit();
         System.out.println("User Search" + userDTO);
         return userDTO;
     }   catch (Exception e) {
        e.printStackTrace();
        return null;

        }
    }
}
