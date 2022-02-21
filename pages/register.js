import Head from "next/head";
import Registration from "../components/Registration";
import Script from "next/script";


const Register = () => {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>

        <div>
          <div>
            <hr></hr>
           </div>
          <Registration></Registration>

        </div>

    </>
  );
};

export default Register;