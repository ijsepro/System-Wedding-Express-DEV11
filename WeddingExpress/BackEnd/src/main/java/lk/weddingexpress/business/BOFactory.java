package lk.weddingexpress.business;


import lk.weddingexpress.business.custom.impl.*;

public class BOFactory {
    private  static BOFactory boFactory;

    public enum BOTypes{
        USER,VENDOR,LOGIN,LOGINDETIAL, USERDETAIL
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
            case USERDETAIL:
                return new UserDetaiImpl();
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
