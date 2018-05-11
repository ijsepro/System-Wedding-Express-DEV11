package lk.weddingexpress.repository;

import lk.weddingexpress.repository.custom.impl.LogInDetailRepositoryImpl;
import lk.weddingexpress.repository.custom.impl.LogInRepositoryImpl;
import lk.weddingexpress.repository.custom.impl.UserDetailRepositoryImpl;
import lk.weddingexpress.repository.custom.impl.UserRepositoryImpl;
import lk.weddingexpress.repository.custom.impl.VendorRepositoryImpl;

public class RepositoryFactory {

    public enum RepositoryTypes{
        USER,VENDOR,LOGIN,LOGINDETAIL, USERDETAILS
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
        switch (repositoryTypes){
            case USER:
                return new UserRepositoryImpl();
            case USERDETAILS:
                return new UserDetailRepositoryImpl();
            case LOGIN:
                return new LogInRepositoryImpl();
            case VENDOR:
                return new VendorRepositoryImpl();
            case LOGINDETAIL:
                return new LogInDetailRepositoryImpl();
                default:return null;
        }
    }
}
