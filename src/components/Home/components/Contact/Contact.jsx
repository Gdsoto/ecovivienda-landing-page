import React from 'react';

// Styles
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Contacto</h3>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <form>
            <label for="fname">Nombres</label>
            <input type="text" id="fname" name="firstname" placeholder="Ingresa tu nombre" className={styles.inputs} />

            <label for="lname">Apellidos</label>
            <input type="text" id="lname" name="lastname" placeholder="Ingresa tu apellido" className={styles.inputs} />

            <label for="email">Correo</label>
            <input type="text" id="email" name="lastname" placeholder="ejemplo@gmail.com" className={styles.inputs} />

            <label for="teléfono">Teléfono</label>
            <input type="text" id="teléfono" name="lastname" placeholder="3203245567" className={styles.inputs} />

            <label for="subject">Mensaje</label>
            <textarea id="subject" name="subject" placeholder="Escriba su mensaje" className={styles.inputs}></textarea>

            <input type="submit" value="Enviar" className={styles.button} />
          </form>
        </div>
        <div className={styles.map}>
          <div className={styles.map_frame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7942.43274525495!2d-73.36115010453969!3d5.5348921197757495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd2874ecb1d05f59!2sEcovivienda!5e0!3m2!1ses-419!2sco!4v1667942703655!5m2!1ses-419!2sco"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              className={styles.frame}
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
