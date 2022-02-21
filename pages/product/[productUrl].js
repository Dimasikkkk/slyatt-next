import Head from "next/head";
// import Card from "../../components/Card";
import styles from '../../styles/Card.module.css'
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Product from "../../models/Product";
import db from "../../utils/db";

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://61f82c0d783c1d0017c44616.mockapi.io/api/items`
//   );
//   const gitData = await res.json();

//   return {
//     props: { gitData },
//   };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { productUrl } = params;


  await db.connect();
  const product = await Product.findOne({ productUrl }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };

}


export default function ProductScreen(props) {

  const {product} = props;
  // console.log(product);
  // const router = useRouter();
  // const { productUrl, name } = router.query;
  // const product = gitData.find((a) => a.productUrl === productUrl);
  // console.log(product);
  // console.log(gitData)

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <div>
        <hr></hr>
      </div>
        <div className={styles.productCard} >
          <div className={styles.navCont}>
            <ul className={styles.navbar}>
              <li className={styles.active}>
                <a href="index.html">Catalog / </a>
              </li>
              <li>
                <a href="index.html">Hoodie / </a>
              </li>
              <li>
                <a href="index.html">Hoodie SEX SHOW</a>
              </li>
              {/* <li><a href="index.html">T-shirt</a></li>
    <li><a href="index.html">Gift card</a></li>
    <li><a href="index.html">Shorts</a></li>
    <li><a href="index.html">Accessories</a></li> */}
            </ul>
          </div>

          <div className={styles.imgSelection}>
            <div className={styles.productImage} id="product-image">
              <img
                src="/main.png"
                alt=""
                className={`${styles.image} ${styles.active}`}
                data-content="1"
                width={522}
                height={522}
              />
              <img
                src="/back.png"
                alt=""
                className={`${styles.image} `}
                data-content="2"
                width={522}
                height={522}
              />
              {/* <Image src="" alt="" className={styles.image } data-content="3" width={522} height={522}/>
    <Image src="" alt="" className={styles.image } data-content="4" width={522} height={522}/>
    <Image src="" alt="" className={styles.image } data-content="5" width={522} height={522}/> */}
              <div id="bx-controls">
                <span className={styles.bxPrev} id="bx-prev"></span>
                <span className={styles.bxNext} id="bx-next"></span>
              </div>
            </div>

            <div className={styles.radio} id="radio">
              <span
                className={`${styles.dot} ${styles.active}`}
                id="dot"
                data-btn="1"
              ></span>
              <span className={styles.dot} id="dot" data-btn="2"></span>
              <span className={styles.dot} id="dot" data-btn="3"></span>
              <span className={styles.dot} id="dot" data-btn="4"></span>
              <span className={styles.dot} id="dot" data-btn="5"></span>
            </div>
          </div>

          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{product.name}</h3>

            <span className={styles.priceAmount}>{product.price}</span>
            <div className={styles.sizeSelect}>
              <a className={styles.text}>Size:</a>
              <a href="#" className={styles.sizeTable} id="myBtn">
                Size table
              </a>
              <div className={styles.sizeChoice} id="size-js">
                <span className={styles.size} id="xs" data-siz="xs">
                  xs
                </span>
                <span className={styles.size} id="s" data-siz="s">
                  s
                </span>
                <span className={styles.size} id="m" data-siz="m">
                  m
                </span>
                <span className={styles.size} id="l" data-siz="l">
                  l
                </span>
                <span className={styles.size} id="xl" data-siz="xl">
                  xl
                </span>
              </div>
              <p className={styles.description}>
                Classic sweatshirt made of dense fabric based on natural cotton
                without fleece with a density of 400 grams. Oversized
                silhouette, comf ortable hood, kangaroo pocket and elasticated
                cuffs. The sweatshirt is presented in a solid color and is
                decorated with prints on the chest and back
              </p>
              <div className={styles.button}>
                <a href="#" className={styles.btn} id="btn">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}



