import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import ProductCards from "../components/ProductCards";
import db from "../utils/db";
import Product from "../models/Product";

export async function getServerSideProps() {
  // const res = await fetch(
  //   `https://61f82c0d783c1d0017c44616.mockapi.io/api/items`
  // );
  // const gitData = await res.json();

  // return {
  //   props: { gitData },
  // };
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    }
  }

}

export default function Home(props) {
  // console.log(gitData);
  const {products} = props;
  // console.log(products)
  return (
    <main className={styles.container}>
      <Head>
        <title>SLYATT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        <div>
          <hr></hr>
        </div>
        <Navigation></Navigation>
        <ProductCards products={products}></ProductCards>
      </div>
    </main>
  );
}
