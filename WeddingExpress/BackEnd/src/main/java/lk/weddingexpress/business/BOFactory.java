package lk.weddingexpress.business;

/**
 * @author lakitha
 */

import lk.weddingexpress.business.custom.impl.UserBOImpl;
import lk.weddingexpress.business.custom.impl.UserDetaiImpl;

public class BOFactory {
    public enum BOTypes{
        USER,USERDETAIL
    }

    public static BOFactory boFactory;

    private BOFactory(){}

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
            case USERDETAIL:
                return new UserDetaiImpl();
            default:
                return null;
        }
    }

}
