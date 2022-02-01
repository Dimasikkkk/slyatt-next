import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ProductCards from '../components/ProductCards'

export async function getServerSideProps(context) {

  const res = await fetch(`https://61f82c0d783c1d0017c44616.mockapi.io/api/items`);
  const gitData = await res.json();



  return {
    props: {gitData}
  }
}




export default function Home({gitData}) {
  // console.log(gitData);
  return (
    <main className={styles.container}>
      <Head>
        <title>SLYATT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <div>
        <Header></Header>
        <div>
          <hr></hr>
        </div>
        <Navigation></Navigation>
        <ProductCards other={gitData}></ProductCards>
        <Footer></Footer>

      </div>





    </main>
  )
}
