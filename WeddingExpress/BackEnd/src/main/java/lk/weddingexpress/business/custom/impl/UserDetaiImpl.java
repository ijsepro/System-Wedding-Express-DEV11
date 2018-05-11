package lk.weddingexpress.business.custom.impl;

import lk.weddingexpress.business.BOFactory;
import lk.weddingexpress.business.custom.UserDetailBO;
import lk.weddingexpress.dto.UserDetailsDTO;
import lk.weddingexpress.entity.User;
import lk.weddingexpress.entity.UserDetail;
import lk.weddingexpress.repository.RepositoryFactory;
import lk.weddingexpress.repository.custom.UserDetaiRepository;
import lk.weddingexpress.repository.custom.UserRepository;
import lk.weddingexpress.resources.HibernateUtill;
import org.hibernate.Session;

import java.util.List;

/**
 * Created by Thilini Hansika on 5/1/2018.
 */
public class UserDetaiImpl implements UserDetailBO {

    private UserDetaiRepository userDetaiRepository;
    private UserRepository userRepository;


    public UserDetaiImpl() {
        userDetaiRepository = (UserDetaiRepository) RepositoryFactory.getInstance().getRepository(RepositoryFactory.RepositoryTypes.USERDETAILS);
        userRepository = (UserRepository) RepositoryFactory.getInstance().getRepository(RepositoryFactory.RepositoryTypes.USER);
    }


    @Override
    public boolean saveUserDetail(UserDetailsDTO c) throws Exception {
        boolean result = false;
        try (Session session = HibernateUtill.getSessionFactory().openSession()) {

            User user = new User();

           user.setUid(c.getUserDTO().getUid());
           user.setEmail(c.getUserDTO().getEmail());
//           user.setPhoneNumber(c.getUserDTO().getPhoneNumber());
           user.setFullName(c.getUserDTO().getFullName());
           user.setUsername(c.getUserDTO().getUsername());
            userRepository.setSession(session);
            userRepository.save(user);
            System.out.println("User Search impl" + user.getUid());


            UserDetail userDetail = new UserDetail();
            userDetail.setId(c.getId());
            userDetail.setFullName(c.getFullName());
            userDetail.setUserName(c.getUserName());
            userDetail.setPartenerName(c.getPartenerName());
            userDetail.setEmail(c.getEmail());
            userDetail.setAge(c.getAge());
            userDetail.setAddress(c.getAddress());
            userDetail.setAboutMe(c.getAboutMe());
//            userDetail.setUser(user.getUid());
            userDetail.setUser(user);

            userDetaiRepository.setSession(session);


            result = userDetaiRepository.save(userDetail);

            System.out.println("UserDetail" + userDetail);
            session.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;

    }

    @Override
    public List<UserDetailsDTO> getAllUserDetail() throws Exception {
        return null;
    }

    @Override
    public boolean updateUserdetail(UserDetailsDTO a) throws Exception {
        return false;
    }
}
