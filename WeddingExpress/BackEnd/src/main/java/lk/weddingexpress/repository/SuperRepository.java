package lk.weddingexpress.repository;

/**
 * @author lakitha
 */

import org.hibernate.Session;

import java.util.List;

public interface SuperRepository <T, ID> {

    public void setSession(Session session) throws Exception;

    public List<T> getAll() throws Exception;

    public boolean save(T t) throws Exception;

    public void update(T t) throws Exception;

    public T findById(ID id)throws Exception;

    public T getUsers(String id)throws Exception;

}
