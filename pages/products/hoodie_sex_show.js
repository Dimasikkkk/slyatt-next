import Head from "next/head";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

const Hoodie = () => {
  // const params = useParams();
  // console.log(params);

  // const [items, setItems] = useState([])

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
          <Card></Card>
          <Footer></Footer>

        </div>

    </>
  );
};

export default Hoodie;