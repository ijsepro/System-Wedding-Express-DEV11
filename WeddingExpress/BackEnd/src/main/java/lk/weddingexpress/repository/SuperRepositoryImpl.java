package lk.weddingexpress.repository;

import org.hibernate.Session;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

public  class SuperRepositoryImpl<T ,ID extends Serializable>implements SuperRepository<T ,ID> {
    private Session session;
    private Class<T> entityClass;

    public SuperRepositoryImpl() {
        entityClass = (Class<T>) (((ParameterizedType) (this.getClass().getGenericSuperclass())).getActualTypeArguments())[0];
        System.out.println(entityClass);
    }

    @Override
    public boolean register(T t) throws Exception {
        return (session.merge(t) != null);
    }


    @Override
    public void setSession(Session session) throws Exception {
        this.session = session;
    }

    @Override
    public List<T> getAll() throws Exception {
        System.err.println(entityClass.getName());
        return session.createQuery("FROM " + entityClass.getSimpleName()).list();
    }

    @Override
    public boolean save(T t) throws Exception {
        return (session.merge(t) != null);
    }

    @Override
    public void update(T t) throws Exception {
        System.out.println();
        session.merge(t);
    }

    @Override
    public boolean search(String queryText) throws Exception {
        System.out.println(queryText);
        System.out.println("thilini: " + session.createQuery(queryText).list().get(0));
        return (session.merge(queryText)!=null);

    }
}
