import styles from '../styles/ProductCards.module.css'
import Link from 'next/link';
import React from 'react';
import db from '../utils/db';
import Product from '../models/Product';



function ProductCards (props) {
  // const [items, SetItems] = React.useState([])

  // fetch('https://61f184ad072f86001749f257.mockapi.io/items')
  //   .then((res) => {
  //   return res.json();
  // }).then(json => {
  //   SetItems(json);
  // });


  const {products} = props;
  console.log(products);
  return (
    <div className={styles.cards}>

      {products.map((product) =>

      <div className={styles.card} key={product.id}>


        <Link href={`/products/${encodeURIComponent(product.name.toLowerCase().replaceAll(' ', '_'))}`}><a>
          <div className={styles.productImage}>
          <span className={styles.relevance}>New</span>
            <img src={product.imageMain} alt="" className={styles.imageMain} width={237} height={288}/>
            <img src={product.imageHover} alt="" className={styles.imageHover} width={237} height={288}/>

          </div>
        </a></Link>
          <div className={styles.productInfo}>
            <span className={styles.productName}>{product.name}</span>
            <span className={styles.productPrice}>{product.price}</span>
          </div>

      </div>
    )}






  </div>
  );
};
export default ProductCards