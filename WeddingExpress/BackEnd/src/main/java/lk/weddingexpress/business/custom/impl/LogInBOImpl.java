package lk.weddingexpress.buisness.custom.impl;

import lk.weddingexpress.buisness.custom.LogInBO;
import lk.weddingexpress.dto.LogInDTO;
import lk.weddingexpress.entity.LogIn;
import lk.weddingexpress.repository.RepositoryFactory;
import lk.weddingexpress.repository.custom.LogInRepository;
import lk.weddingexpress.resources.HibernateUtil;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;

public class LogInBOImpl implements LogInBO {

    private LogInRepository logInRepository;
    public LogInBOImpl(){
        logInRepository = (LogInRepository) RepositoryFactory.repositoryFactory.getRepository(RepositoryFactory.RepositoryTypes.LOGIN);
    }

    @Override
    public boolean saveLogIn(LogInDTO logInDTO) {
        boolean result = false;

        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            logInRepository.setSession(session);
            session.beginTransaction();

            LogIn logIn = new LogIn();
            logIn.setLogid(logInDTO.getLogid());
            logIn.setUid(logInDTO.getUid());
            logIn.setVid(logInDTO.getVid());
            logIn.setEmail(logInDTO.getEmail());
            logIn.setPassword(logInDTO.getPassword());

            result = logInRepository.save(logIn);
            session.beginTransaction().commit();

        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<LogInDTO> getAll() throws Exception {

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            logInRepository.setSession(session);
            session.beginTransaction();

            List<LogIn> allLogIn = logInRepository.getAll();
            session.getTransaction().commit();
            if (allLogIn != null) {
                List<LogInDTO> loginDTO = new ArrayList<>();

                for (LogIn a : allLogIn) {
                    LogInDTO logInDTO = new LogInDTO();
                    logInDTO.setLogid(a.getLogid());
                    logInDTO.setUid(a.getUid());
                    logInDTO.setVid(a.getVid());
                    logInDTO.setEmail(a.getEmail());
                    logInDTO.setPassword(logInDTO.getPassword());
                }
                return loginDTO;
            } else {
                return null;
            }
        }
    }
}
