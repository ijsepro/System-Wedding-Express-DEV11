package lk.ijse.weddingexpress.buisness;

import lk.ijse.weddingexpress.buisness.custom.UserBO;
import lk.ijse.weddingexpress.buisness.custom.impl.LogInBOImpl;
import lk.ijse.weddingexpress.buisness.custom.impl.LogInDetailBOImpl;
import lk.ijse.weddingexpress.buisness.custom.impl.UserBOImpl;
import lk.ijse.weddingexpress.buisness.custom.impl.VendorBOImpl;

public class BOFactory {
    private  static BOFactory boFactory;

    public enum BOTypes{
        USER,VENDOR,LOGIN,LOGINDETIAL
    }

    public static BOFactory getInstance(){
        if(boFactory == null){
            boFactory = new BOFactory();
        }
        return boFactory;
    }

    public SuperBO getBO(BOTypes boTypes){
        switch (boTypes){
            case USER:
                return new UserBOImpl();
            case LOGIN:
                return new LogInBOImpl();
            case VENDOR:
                return new VendorBOImpl();
            case LOGINDETIAL:
                return new LogInDetailBOImpl();
                default:return null;
        }
    }

}
