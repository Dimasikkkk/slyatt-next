import styles from '../styles/Navigation.module.css'


const Navigation = () => {
  return (
    <div className={styles.navCont}>
      <ul className={styles.navbar}>
        <li className={styles.active}><a href="index.html">New collections</a></li>
        <li><a href="index.html">TUNACARDS x SLYATT</a></li>
        <li><a href="index.html">Sweatshirts</a></li>
        <li><a href="index.html">T-shirt</a></li>
        <li><a href="index.html">Gift card</a></li>
        <li><a href="index.html">Shorts</a></li>
        <li><a href="index.html">Accessories</a></li>
      </ul>
    </div>
  );
};
export default Navigation