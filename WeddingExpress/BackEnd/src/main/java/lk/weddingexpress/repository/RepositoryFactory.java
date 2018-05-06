package lk.weddingexpress.repository;

/**
 * @author lakitha
 */

import lk.weddingexpress.repository.custom.impl.UserDetailRepositoryImpl;
import lk.weddingexpress.repository.custom.impl.UserRepositoryImpl;

public class RepositoryFactory {

    public enum RepositoryTypes{
        USER,USERDETAIL
    }

    public static RepositoryFactory repositoryFactory;

    private RepositoryFactory() {
    }

    public static RepositoryFactory getInstance(){
        if(repositoryFactory==null){
            repositoryFactory=new RepositoryFactory();
        }
        return repositoryFactory;
    }

    public SuperRepository getRepository(RepositoryTypes repositoryTypes){
        switch(repositoryTypes){
            case USER:
                return new UserRepositoryImpl();
            case USERDETAIL:
                return new UserDetailRepositoryImpl();
            default:
                return null;
        }
    }

}
