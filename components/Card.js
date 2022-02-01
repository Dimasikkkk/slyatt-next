// import React, { useState, useEffect } from 'react'
import styles from '../styles/Card.module.css'
import { useHistory } from "react-router";
import React, {useEffect} from "react";

function Card({other}) {
  // const [items, setItems] = useState([])
  // const params = useHistory();
  // console.log(params);
  // console.log(other);
  // useEffect(() => {
  //   fetch('https://61f184ad072f86001749f257.mockapi.io/items')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  //   }, []);
  //   console.log(items);

    // export async function getStaticProps() {
    //   // Call an external API endpoint to get posts
    //   const res = await fetch('https://61f184ad072f86001749f257.mockapi.io/items')
    //   const items = await res.json()

    //   // By returning { props: { posts } }, the Blog component
    //   // will receive `posts` as a prop at build time
    //   return {
    //     props: {
    //       items,
    //     },
    //   }
    // }
    useEffect(() => {
      const prev = document.getElementById('bx-prev');
      const next = document.getElementById('bx-next');
      const slides = document.querySelectorAll('.image');
      const dots = document.querySelectorAll('.dot');


      let index = 0;

      const activeSlide = n => {
          for(slide of slides) {
              slide.classList.remove('active');
          }
          slides[n].classList.add('active');
      }


      const activeDot = n => {
          for(dot of dots) {
              dot.classList.remove('active');
          }
          dots[n].classList.add('active');
      }

      const prepareCurrentSlide = ind => {
          activeSlide(index);
          activeDot(index);
      }

      const nextSlide = () => {
          if(index == slides.length - 1) {
              index = 0;
              prepareCurrentSlide(index);
          }else {
              index++;
              prepareCurrentSlide(index);
          }
      }

      const prevSlide = () => {
          if(index == 0) {
              index = slides.length - 1;
              prepareCurrentSlide(index);
          }else {
              index--;
              prepareCurrentSlide(index);
          }
      }

      dots.forEach((item, indexDot)=> {
          item.addEventListener('click', () => {
              index = indexDot;
              prepareCurrentSlide(index);
          })
      })



      next.addEventListener('click', nextSlide);
      prev.addEventListener('click', prevSlide);


    },[])



    return (
    <div className={styles.productCard}>
      <div className={styles.navCont}>
        <ul className={styles.navbar}>
          <li className={styles.active}><a href="index.html">Catalog / </a></li>
          <li><a href="index.html">Hoodie / </a></li>
          <li><a href="index.html">Hoodie SEX SHOW</a></li>
          {/* <li><a href="index.html">T-shirt</a></li>
          <li><a href="index.html">Gift card</a></li>
          <li><a href="index.html">Shorts</a></li>
          <li><a href="index.html">Accessories</a></li> */}
        </ul>
      </div>

      <div className={styles.imgSelection}>



        <div className={styles.productImage} id="product-image">
          <img src="/main.png" alt="" className={`${styles.image} ${styles.active}`}   data-content="1" width={522} height={522}/>
          <img src="/back.png" alt="" className={`${styles.image} `} data-content="2" width={522} height={522}/>
          {/* <Image src="" alt="" className={styles.image } data-content="3" width={522} height={522}/>
          <Image src="" alt="" className={styles.image } data-content="4" width={522} height={522}/>
          <Image src="" alt="" className={styles.image } data-content="5" width={522} height={522}/> */}
            <div id="bx-controls">
              <span className={styles.bxPrev} id="bx-prev"></span>
              <span className={styles.bxNext} id="bx-next"></span>
            </div>
        </div>





        <div className={styles.radio} id="radio">
          <span className={`${styles.dot} ${styles.active}`} id="dot" data-btn="1"></span>
          <span className={styles.dot} id="dot" data-btn="2"></span>
          <span className={styles.dot} id="dot" data-btn="3"></span>
          <span className={styles.dot} id="dot" data-btn="4"></span>
          <span className={styles.dot} id="dot" data-btn="5"></span>
        </div>
      </div>


      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{}</h3>

        <span className={styles.priceAmount}>
          4090 RUB
        </span>
        <div className={styles.sizeSelect}>
          <a className={styles.text}>Size:</a>
          <a href="#" className={styles.sizeTable} id="myBtn">Size table</a>
          <div className={styles.sizeChoice} id="size-js">
            <span className={styles.size} id="xs" data-siz="xs">xs</span>
            <span className={styles.size} id="s" data-siz="s">s</span>
            <span className={styles.size} id="m" data-siz="m">m</span>
            <span className={styles.size} id="l" data-siz="l">l</span>
            <span className={styles.size} id="xl" data-siz="xl">xl</span>
          </div>
          <p className={styles.description}>Classic sweatshirt made of dense fabric based on natural cotton without fleece with a density of 400 grams.
            Oversized silhouette, comf ortable hood, kangaroo pocket and elasticated cuffs. The sweatshirt is presented
            in a solid color and is decorated with prints on the chest and back
          </p>
          <div className={styles.button}>
            <a href="#" className={styles.btn} id="btn">Buy</a>
          </div>

        </div>



      </div>
    </div>
  );
};
export default Card