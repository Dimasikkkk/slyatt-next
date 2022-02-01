import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";


export async function getServerSideProps(context) {

  const res = await fetch(`https://61f82c0d783c1d0017c44616.mockapi.io/api/item/1`);
  const deviceData = await res.json();



  return {
    props: {deviceData}
  }
}


const Hoodie = ({deviceData}) => {


  return (
    <>
      <Head>
        <title>Hoodie Sex Show</title>
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
          <Card other={deviceData}></Card>
          <Footer></Footer>

        </div>

    </>
  );
};

export default Hoodie;