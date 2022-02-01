import styles from '../styles/Login.module.css'
import Link from 'next/link';


const Login = () => {
  return (
    <div id="main" className={styles.main}>
      <h1 className={styles.h1}>Login</h1>

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

          <a className={styles.forgotButton} href="">Forgot password?</a>


          <button type="submit" value="Login" className={styles.btn}>Login</button>
          <Link href="/Register"><a className={styles.signUp}>Sign Up</a></Link>
        </form>

      </div>
    </div>
  );
};
export default Login