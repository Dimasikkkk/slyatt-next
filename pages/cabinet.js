import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";


const Cabinet = () => {
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
          <Login></Login>
          <Footer></Footer>

        </div>

    </>
  );
};

export default Cabinet;