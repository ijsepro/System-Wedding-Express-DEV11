package lk.ijse.weddingexpress.repository;

import lk.ijse.weddingexpress.repository.custom.impl.LogInDetailRepositoryImpl;
import lk.ijse.weddingexpress.repository.custom.impl.LogInRepositoryImpl;
import lk.ijse.weddingexpress.repository.custom.impl.UserRepositoryImpl;
import lk.ijse.weddingexpress.repository.custom.impl.VendorRepositoryImpl;

public class RepositoryFactory {

    public enum RepositoryTypes{
        USER,VENDOR,LOGIN,LOGINDETAIL
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
