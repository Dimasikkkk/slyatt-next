import styles from '../styles/Blog.module.css'
import Image from 'next/image'



const Blog = () => {
  return (
    <div id="main" className={styles.main}>
      <h1 className={styles.h1}>News</h1>
      <div className={styles.newsYear}>
        <hr className={styles.year}/>
        <Image src="/2021.png" alt="" width={139} height={43}/>
      </div>


      <div className={styles.newsCard}>
        <div className={styles.card}>
            <a href="#"><Image src="/1_shoes.webp" className={styles.newsImage} alt="sneaker" width={312} height={202} quality={100} placeholder/></a>
            <span className={styles.newsDate}>7 June</span>
            <a className={styles.newsName} href="#">Release shoes Air Jordan 1 Mid WMNS "Barely Rose"</a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <Image src="/2_shoes.webp" className={styles.newsImage} alt="" width={312} height={202} quality={100}/>
            <span className={styles.newsDate}>26 Feb</span>
            <span className={styles.newsName}>Release shoes WMNS Air Jordan 1 Low «Chicago Flip»</span>
          </a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <Image src="/3_shoes.webp" className={styles.newsImage} alt="" width={312} height={202} quality={100}/>
            <span className={styles.newsDate}>7 June</span>
            <span className={styles.newsName}>Release shoes Air Jordan 1 Mid "Crimson Tint Toe" (GS)</span>
          </a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <Image src="/1_shoes.webp" className={styles.newsImage} alt="" width={312} height={202} quality={100}/>
            <span className={styles.newsDate}>7 June</span>
            <span className={styles.newsName}>Release shoe Air Jordan 1 Mid WMNS "Barely Rose"</span>
          </a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <Image src="/1_shoes.webp" className={styles.newsImage} alt="" width={312} height={202} quality={100}/>
            <span className={styles.newsDate}>7 June</span>
            <span className={styles.newsName}>Release shoe Air Jordan 1 Mid WMNS "Barely Rose"</span>
          </a>
        </div>

        <div className={styles.card}>
          <a href="#">
            <Image src="/1_shoes.webp" className={styles.newsImage} alt="" width={312} height={202} quality={100}/>
            <span className={styles.newsDate}>13 Jan</span>
            <span className={styles.newsName}>Release shoe Air Jordan 1 Mid WMNS "Barely Rose"</span>
          </a>
        </div>

        <div className={styles.card}>
        <a href="#">
          <Image src="/1_shoes.webp" className={styles.newsImage} alt="" width={312} height={202} quality={100}/>
          <span className={styles.newsDate}>23 July</span>
          <span className={styles.newsName}>Release shoe Air Jordan 1 Mid WMNS "Barely Rose"</span>
        </a>
      </div>

    </div>


  </div>
  );
};

export default Blog