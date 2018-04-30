package lk.weddingexpress.repository;

import lk.weddingexpress.repository.custom.impl.UserRepositoryImpl;

public class RepositoryFactory {

    public enum RepositoryTypes{
        USER
    }

    public static RepositoryFactory repositoryFactory;

    public RepositoryFactory() {
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
            default:
                return null;
        }
    }

}
