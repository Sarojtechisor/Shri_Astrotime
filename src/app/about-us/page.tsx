'use client';
import Image from 'next/image';
import styles from './aboutUs.module.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Animation from '../../../Components/Animations/Galaxy-Animation/Animation';

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Animation />
      <div className={styles.Container}>
        <div className={styles.subContainer1}>
          <h1 className={styles.AboutUsHeading}>About Us</h1>
        </div>

        <div className={styles.subContainer2}>
          <h1 className={styles.ContentHeading}>Who are we..</h1>
          <p className={styles.MainContentParagraph}>
            We, at Shri Astrotime, are a team of people with extensive
            experience in Horology and Electronics System Design, with strong
            commitment and vision to build a world class company that designs
            and manufactures high quality products. Panchanga Clock is the
            flagship product of this startup. Our mission is to deliver highly
            reliable and innovative products in this domain to our customers,
            worldwide.
          </p>
        </div>

        <div className={styles.subContainer3}>
          <div className={styles.LeftSubContainer}>
            <Image
              className={styles.SectionImage}
              src="/Images/About-Img/vision-astrotime (1).jpg"
              alt="Vision Shri Astrotime"
              width={500}
              height={350}
            
            />
          </div>
          <div className={styles.RightSubContainer}>
            <h1 className={styles.SectionHeading}>Vision:</h1>
            <p className={styles.SectionParagraph}>
              To create the finest Panchanga Clocks that bring to life the rich
              and ancient Indian tradition of timekeeping, blending heritage
              with innovation. At Shri Astrotime, we aspire to reconnect people
              with the profound astronomical knowledge of our ancestors,
              offering not just a timepiece but a timeless symbol of India’s
              cultural brilliance. Through precision, craftsmanship, and modern
              technology, we aim to preserve and promote the essence of Vedic
              timekeeping for generations to come.
              <br /> <br />
              At Shri Astrotime, our mission is to create the finest Panchanga
              Clocks that bring to life the rich and ancient Indian tradition of
              timekeeping — blending timeless heritage with modern innovation.
              We aspire to reconnect people with the profound astronomical
              wisdom of our ancestors, offering not merely a timepiece, but a
              living expression of India’s cultural and spiritual brilliance.
              <br />
              <br />
              Our vision is to preserve and promote the essence of Vedic
              timekeeping for generations to come — helping people experience
              time not just as a sequence of hours, but as a journey rooted in
              cosmic rhythm, tradition, and meaning.
            </p>
          </div>
        </div>

        <div className={styles.subContainer4}>
          <div className={styles.LeftSubContainer}>
            <h1 className={styles.SectionHeading}>Mission:</h1>
            <p className={styles.SectionParagraph}>
              To design, manufacture, and deliver high-quality Panchanga Clocks that reflect the essence of India’s ancient timekeeping tradition. Through innovation, precision engineering, and unwavering commitment to excellence, we aim to provide our customers worldwide with a unique blend of heritage and technology. Our mission is to inspire a deeper appreciation of Vedic wisdom while maintaining the highest standards of quality, reliability, and customer satisfaction. At Shri Astrotime, we strive to keep the timeless legacy of Panchanga alive in every home.
              <br /> <br />
              We are dedicated to reviving the Vedic understanding of time — one that goes beyond hours and minutes to embrace celestial rhythms, lunar phases, and planetary alignments. Every clock we create is a bridge between the cosmic wisdom of the past and the digital world of today.
              <br />
              <br />
              Our goal is not only to preserve this sacred knowledge but also to make it a meaningful part of everyday life. By bringing Panchanga into homes, schools, and spiritual spaces, we hope to inspire curiosity, cultural pride, and a deeper appreciation of our ancestors’ insights into time and the universe.
            </p>
          </div>
          <div className={styles.RightSubContainer}>
            <Image
              className={styles.SectionImage}
              id={styles.SectionImage2}
              src="/Images/About-Img/vision (1).jpg"
              alt="Mission Shri Astrotime"
              width={400}
              height={350}
             
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
