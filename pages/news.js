// import styles from "../styles/Blog.module.css";
import Head from "next/head";
import Blog from "../components/Blog";


const News = () => {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <div>
        <div>
          <hr></hr>
        </div>
        <Blog></Blog>

      </div>

    </>
  );
};

export default News;