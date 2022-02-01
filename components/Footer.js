import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'


function Subscribe() {

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }


  return (
    <footer className={styles.back}>
    <div className={styles.container}>
      <div className={styles.logoFooter}>
        <Image src="/logoFooter.svg" alt="" width={283} height={80} priority />
        <h6 className={styles.h6}>We create clothes for you.</h6>
        <span className={styles.rights}>© 2021 SLYATT. All Rights Reserved.</span>
      </div>
      <form className={styles.subscribeForm} onSubmit={subscribe}>
        <span>Subscribe to our newsletter:</span>
        <div className={styles.subscribeData}>
          <input id="email-input" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="YOUR EMAIL"/>
          <button type="submit" onClick={subscribe} className={styles.subscribeButton}><a>Subcribe</a></button>
        </div>

        <div className={styles.socialMedia}>

          <div className={styles.socialCard}>
            <Image src="/facebook.svg" alt="fc" width={25} height={28}/>
            <a href="">SLYATT</a>
          </div>

          <div className={styles.socialCard}>
            <Image src="/instagram.svg" alt="instagram" width={25} height={28}/>
            <a href="">SLYATT</a>
          </div>

          <div className={styles.socialCard}>
            <Image src="/vk.svg" alt="vk" width={25} height={28}/>
            <a href="https://vk.com/slyattuniverse">SLYATT</a>
          </div>

        </div>


      </form>

      <div className={styles.navigation}>
        <ul>
          <li className={styles.chapter}>
            <a href="">PRODUCT OFFER</a>
          </li>
          <li className={styles.chapter}>
            <a href="">NEWS</a>
          </li>
          <li className={styles.chapter}>
            <a href="">CONTACT</a>
          </li>
          <li className={styles.chapter}>
            <a href="">CATALOG</a>
          </li>
          <li className={styles.chapter}>
            <a href="">DELIVERY</a>
          </li>
        </ul>
      </div>

    </div>


    <div className={styles.containerNav}>
      <div className={styles.logoFooter}>
      <Image src="/logoFooter.svg" alt="" width={283} height={80}/>
        <h6>We create clothes for you.</h6>

      </div>

      <div className={styles.navigation}>
        <ul>
          <li className={styles.chapter}>
            <a href="">PRODUCT OFFER</a>
          </li>
          <li className={styles.chapter}>
            <a href="">NEWS</a>
          </li>
          <li className={styles.chapter}>
            <a href="">CONTACT</a>
          </li>
          <li className={styles.chapter}>
            <a href="">CATALOG</a>
          </li>
          <li className={styles.chapter}>
            <a href="">DELIVERY</a>
          </li>
        </ul>
      </div>

      <form className={styles.subscribeForm} onSubmit={subscribe}>
        <span>Subscribe to our newsletter:</span>
        <div className={styles.subscribeData}>
          <input id="email-input" name="email" required type="email" required placeholder="YOUR EMAIL"/>
          <button type="submit" className={styles.subscribeButton}><a>Subcribe</a></button>
        </div>

        <div className={styles.socialMedia}>

          <div className={styles.socialCard}>
            <Image src="/facebook.svg" alt="fc" width={25} height={28}/>
            <a href="">SLYATT</a>
          </div>

          <div className={styles.socialCard}>
            <Image src="/instagram.svg" alt="instagram" width={25} height={28}/>
            <a href="">SLYATT</a>
          </div>

          <div className={styles.socialCard}>
            <Image src="/vk.svg" alt="vk" width={25} height={28}/>
            <a href="https://vk.com/slyattuniverse">SLYATT</a>
          </div>

        </div>


      </form>

      <span className={styles.rights}>© 2021 SLYATT. All Rights Reserved.</span>


    </div>

  </footer>
  );

}
  export default Subscribe