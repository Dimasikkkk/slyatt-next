// import styles from "../styles/Blog.module.css";
import Head from "next/head";
import Contacts from "../components/Contacts";


const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
        <div>

          <div>
            <hr></hr>
          </div>
          <Contacts></Contacts>

        </div>

    </>
  );
};

export default Contact;