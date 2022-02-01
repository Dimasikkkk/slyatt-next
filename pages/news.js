// import styles from "../styles/Blog.module.css";
import Head from "next/head";
import Image from "next/image";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";


const News = () => {
  return (
    <>
      <Head>
        <title>News</title>
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
          <Blog></Blog>
          <Footer></Footer>

        </div>

    </>
  );
};

export default News;