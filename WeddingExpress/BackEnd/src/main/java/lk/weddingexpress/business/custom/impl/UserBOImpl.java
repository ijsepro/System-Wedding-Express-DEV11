package lk.weddingexpress.buisness.custom.impl;

import lk.weddingexpress.buisness.custom.UserBO;
import lk.weddingexpress.dto.UserDTO;
import lk.weddingexpress.entity.User;
import lk.weddingexpress.repository.RepositoryFactory;
import lk.weddingexpress.repository.custom.UserRepository;
import lk.weddingexpress.resources.HibernateUtil;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;

public class UserBOImpl implements UserBO {
    private UserRepository userRepository;

    public UserBOImpl() {
        userRepository = (UserRepository) RepositoryFactory.getInstance().getRepository(RepositoryFactory.RepositoryTypes.USER);
    }

    @Override
    public boolean save(UserDTO userDTO) {
        boolean result = false;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            userRepository.setSession(session);
            session.beginTransaction();

            User user = new User();
            user.setUid(userDTO.getUid());
            user.setEmail(userDTO.getEmail());
            user.setFullName(userDTO.getFullName());
            user.setUsername(userDTO.getUsername());
            user.setPhoneNumber(userDTO.getPhoneNumber());
            user.setPassword(userDTO.getPassword());

            result = userRepository.save(user);
            session.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<UserDTO> getAll() throws Exception {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            userRepository.setSession(session);
            session.beginTransaction();

            List<User> allUsers = userRepository.getAll();
            session.getTransaction().commit();
            if (allUsers != null) {
                List<UserDTO> userDTOS = new ArrayList<>();

                for (User a : allUsers) {
                    UserDTO userDTO = new UserDTO();
                    userDTO.setUid(userDTO.getUid());
                    userDTO.setEmail(userDTO.getEmail());
                    userDTO.setFullName(userDTO.getFullName());
                    userDTO.setUsername(userDTO.getUsername());
                    userDTO.setPhoneNumber(userDTO.getPhoneNumber());
                    userDTO.setPassword(userDTO.getPassword());
                }
                return userDTOS;
            } else {
                return null;
            }
        }
    }

    @Override
    public UserDTO search(String email) {

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            System.out.println("Bo: check1" + email);
            userRepository.setSession(session);
            session.beginTransaction();


//            System.out.println(user.getEmail());

            List<User> user = (List<User>) session.createQuery("From User where email ='" + email + "'").list();
            for (User users : user
                    ) {
                if (users != null) {
                    if (user != null) {
                        UserDTO userDTO1 = new UserDTO();

                        userDTO1.setUid(users.getUid());
                        userDTO1.setEmail(users.getEmail());
                        userDTO1.setFullName(users.getFullName());
                        userDTO1.setUsername(users.getUsername());
                        userDTO1.setPhoneNumber(users.getPhoneNumber());
                        userDTO1.setPassword(users.getPassword());


                        return userDTO1;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }

            }
            System.out.println("run query");
            System.out.println(user);
            session.getTransaction().commit();

            return new UserDTO();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }
}
