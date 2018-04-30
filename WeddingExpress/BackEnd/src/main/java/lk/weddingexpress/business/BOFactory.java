package lk.weddingexpress.business;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.custom.impl.UserBOImpl;

public class BOFactory {
    public enum BOTypes{
        USER
    }

    private static BOFactory boFactory;

    public static BOFactory getInstance(){
        if (boFactory == null){
            boFactory = new BOFactory();
        }
        return boFactory;
    }

    public SuperBO getBO(BOTypes type) {
        switch (type) {
            case USER:
                return new UserBOImpl();
            default:
                return null;
        }
    }

}
