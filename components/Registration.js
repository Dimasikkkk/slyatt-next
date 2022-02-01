import styles from '../styles/Login.module.css';
import Link from 'next/link';
import Script from 'next/script';


const Registration = () => {
  return (
    <>
    <Script src="../js/phoneinput.js"></Script>
    <div id="main" className={styles.main}>
      <h1 className={styles.h1}>Sign Up</h1>

      <div className={styles.wrapper}>
        <form action="auth.php" method="post">
          <div className={styles.inputData}>
            <input type="text" id="login" name="login"/>
            <label>Username</label>
          </div>

          <div className={styles.inputData}>
            <input type="password" id="pass" name="pass"/>
            <label>Password</label>
          </div>

          <div className={styles.inputData}>
            <input type="tel" data-tel-input id="number" name="number" maxLength="18" />
            <label>Phone number</label>
          </div>





          <button type="submit" value="Login" className={styles.btn}>Sign Up</button>
          <Link href="/cabinet"><a className={styles.signUp}>Return back</a></Link>
        </form>

      </div>
    </div>
    </>
  );
};
export default Registration