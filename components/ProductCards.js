import styles from '../styles/ProductCards.module.css'
import Link from 'next/link';
import React from 'react';



function ProductCards ({ other }) {
  // const [items, SetItems] = React.useState([])

  // fetch('https://61f184ad072f86001749f257.mockapi.io/items')
  //   .then((res) => {
  //   return res.json();
  // }).then(json => {
  //   SetItems(json);
  // });




  return (
    <div className={styles.cards}>
      {other.map(item =>


      <div className={styles.card} key={item.id}>


        <Link href={`/products/${encodeURIComponent(item.productUrl)}`}><a>
          <div className={styles.productImage}>
          <span className={styles.relevance}>New</span>
            <img src={item.imageMain} alt="" className={styles.imageMain} width={237} height={288}/>
            <img src={item.imageHover} alt="" className={styles.imageHover} width={237} height={288}/>

          </div>
        </a></Link>
          <div className={styles.productInfo}>
            <span className={styles.productName}>{item.name}</span>
            <span className={styles.productPrice}>{item.price}</span>
          </div>

      </div>
    )}






  </div>
  );
};
export default ProductCards