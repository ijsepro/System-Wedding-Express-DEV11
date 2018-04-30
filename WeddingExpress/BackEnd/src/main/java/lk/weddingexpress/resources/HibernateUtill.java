package lk.weddingexpress.resources;


import lk.weddingexpress.entity.User;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import java.io.File;

public class HibernateUtill {

    private static final SessionFactory sessionFactory;

    private static StandardServiceRegistry registry;

    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml)
            // config file.
            File hibernateProperties = new File("D:\\Wedding Express v 0.0.1\\backend\\settings\\hibernate.properties");
            registry = new StandardServiceRegistryBuilder().loadProperties(hibernateProperties).build();

            // (2)
            sessionFactory = new MetadataSources(registry)
                    .addAnnotatedClass(User.class)
                    .buildMetadata().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            StandardServiceRegistryBuilder.destroy(registry
            );
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
