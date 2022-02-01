import styles from '../styles/Contact.module.css'
import Image from 'next/image'


const Contacts = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Contact</h1>
        <div className={styles.contactSend}>
          <div className={styles.contactInfo}>
            <span className={styles.text}>Feel free to cantact us any time. We will get back to you as soon as we can</span>
          </div>

          <div className={styles.wrapper}>

        <div className={styles.inputData}>
          <input type="text" required/>
          <label>Name</label>
        </div>

        <div className={styles.inputData}>
          <input type="text" required/>
          <label>Email</label>
        </div>

        <div className={styles.inputData}>
          <input type="text" required/>
          <label>Message</label>
        </div>
        <input type="submit" value="SEND" className={styles.btn}/>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <h5 className={styles.h5}>Info</h5>


          <div className={styles.card}>
            <Image src="/message.svg" alt="" width={30} height={30}/>
            <a>slyatt@gmail.com</a>
          </div>

          <div className={styles.card}>
            <Image src="/tele.svg" alt="" width={30} height={30}/>
            <a>+7 499 372 23 54</a>
          </div>

          <div className={styles.card}>
            <Image src="/build.svg" alt="" width={30} height={30}/>
            <a>14 Greenroad St.</a>
          </div>

          <div className={styles.card}>
            <Image src="/clock.svg" alt="" width={30} height={30}/>
            <a>09:00-20:00</a>
          </div>


        </div>
    </div>


  );
};
export default Contacts