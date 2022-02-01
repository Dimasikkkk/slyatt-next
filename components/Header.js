import styles from '../styles/Home.module.css'
import Link from 'next/link';
// import Logo from "../public/logo.png"



const Header = () => {
  return (
    <div className={styles.containerHed}>
      <div className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.navMobile}>
            <a href="index.html">
              <img className={styles.logo} src="/logoMobile.svg" alt="logo"/>
            </a>
          </li>

          <li className={styles.navItem}><Link href= "/news"><a>News</a></Link></li>
          <li className={styles.navItem}><Link href="#"><a >Order status</a></Link></li>
          <li className={styles.navItem}><Link href="#"><a>Catalog</a></Link></li>
          <li className={styles.navItem}><Link href="/"><a><img className={styles.logo} src="/logo.png" alt="logo" width={283} height={80} /></a></Link></li>
          <li className={styles.navItem}><Link href="#"><a>Delivery</a></Link></li>
          <li className={styles.navItem}><Link href="/contact"><a>Сontacts</a></Link></li>
          <li><Link href="/cabinet"><a><img className={styles.privateLk} src="/lk.svg " alt="lk" width={25} height={25}/></a></Link></li>
          <li className={styles.account}><Link href="#"><a><img className={styles.privateCart} src="/cart.svg " alt="cart" width={24} height={25}/></a></Link></li>
          <li className={styles.burger}><Link href="#"><a className={styles.icon} ><img src="/burger.svg " alt="burger"/></a></Link></li>
        </ul>
      </div>
    <div className={styles.topnav}>
      <div id="myLinks">
        <a href="News.js">News</a>
        <hr/>
        <a href="catalog.html">Catalog</a>
        <hr/>
        <a href="#about">Order status</a>
        <hr/>
        <a href="#about">Delivery</a>
        <hr/>
        <a href="#about">Contacts</a>
        <hr/>
      </div>
    </div>
    {/* <hr className={styles.hr}/> */}
  </div>

  );
};
export default Header