"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../../Components/Navbar/Navbar";
import Animation from "../../../Components/Animations/Galaxy-Animation/Animation";
import styles from "./ourProduct.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import EnquiryForm from "../../../Components/Enquiry-Form/enquiryForm";
import Footer from "../../../Components/Footer/Footer";
import Loading from "../../../Components/Loading/loading";

const OurProduct = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const graphicalInfo = [
    {
      title: "1. Moon Position Indicates:",
      items: ["Nakshatra", "Rashi (Moon Shine)", "Pakhsa", "Tithi"],
    },
    {
      title: "2. Sun Position Indicates:",
      items: ["Masa (Lunar Month)", "Sun Sign / Solar Month"],
    },
    {
      title: "3. Earth Position (East-West Horizon) Indicates:",
      items: [
        "Lagna (Rashi rising in the East)",
        "Suryodaya and Chandrodaya",
        "Positions of the sun and the moon in the sky",
      ],
    },
  ];

  const digitalInfo = [
    "Time & Date",
    "Shaka – Shalivahana and Kaliyugabda",
    "Samvatsara",
    "Dakshinayana / Uttarayana",
    "Ritu",
    "Chandramana Masa",
    "Tithi",
    "Nakshatra",
    "Yoga",
    "Karana",
    "Saura Masa",
    "Vara / Weekday",
    "Rahukala, Gulikala, Yamagandakala",
    "Festivals / National Events",
  ];

  const watchCard = [
    {
      title: "Kannada Green Rosewood",
      img: "/Images/Watch-Images/Kannada_Green.png",
    },
    {
      title: "English Red Rosewood",
      img: "/Images/Watch-Images/English_Red.png",
    },
    {
      title: "Hindi Red Rosewood",
      img: "/Images/Watch-Images/Hindi_Red.png",
    },
    {
      title: "Telugu Blue Rosewood",
      img: "/Images/Watch-Images/Telugu_Blue.png",
    },
    {
      title: "Tamil Blue Rosewood",
      img: "/Images/Watch-Images/Tamil_Blue.png",
    },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.OurProductContainer}>
          <Navbar />
          {/* <Animation /> */}

          <div className={styles.VideoBackground}>
            <video autoPlay muted loop>
              <source
                src="/Images/Bg-Vdo/Astrotime - World s First Panchanga Clock.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className={styles.OurProductSection1}>
              <div>
                <h6 className={styles.SectionSubHead}>About Our Clock</h6>
                <h1 className={styles.SectionHead}>Panchanga Clock</h1>
                <p className={styles.ContentParagraph}>
                  This is a unique wall clock that displays Panchanga apart from
                  normal (Gregorian) date and time. Current Panchanga is
                  displayed by the position of the sun, the moon and the earth
                  at that instant, against the backdrop of fixed stars. The
                  clock serves as a time and calendar device apart from being
                  educational and a decorative item. <br />
                  Panchanga data in this clock is based on Jagannatha Hora
                  containing accurate Ephemeris and customized in-built
                  algorithms.
                </p>
              </div>
              <div>
                <Image
                  className={styles.SectionImg}
                  src="/Images/Watch-Images/Panchanga-Clock.png"
                  alt="Panchanga Clock Display"
                  width={500}
                  height={400}
                />
              </div>
            </div>

            <div className={styles.OurProductSection2}>
              <div>
                <h3 className={styles.ContentHead}>
                  Graphical Display gives below information:
                </h3>
                {graphicalInfo.map((section, index) => (
                  <div key={index}>
                    <h6 className={styles.ContentSubHead}>{section.title}</h6>
                    <ul className={styles.ContentListDiv}>
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <i className="bi bi-caret-right-fill text-amber-400"></i>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 className={styles.ContentHead}>
                  Digital display gives below information:
                </h3>
                <ul className={styles.ContentListDiv}>
                  {digitalInfo.map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-caret-right-fill text-amber-400"></i>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.OurProductSection3}>
              <h1 className={styles.SectionHead}>Product Catalogue</h1>
              <div className={styles.ProductCardDiv}>
                {watchCard.map((product, index) => (
                  <div key={index} className={styles.ProductCard}>
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={300}
                      height={300}
                      className={styles.ProductImage}
                    />
                    <h3 className={styles.ProductName}>{product.title}</h3>
                    <p className={styles.ProductDescription}></p>
                    <p className={styles.ProductPrice}>
                      MRP: ₹24,900/- (incl. GST)
                    </p>
                    <button
                      className={styles.ProductCardBtn}
                      onClick={() => setShowPopup(true)}
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>

              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm pt-1 z-[9999]">
                  <div
                    className="bg-opacity-50 p-5 rounded-lg shadow-2xl w-full max-w-3xl relative z-[10000]"
                    id={styles.PopupForm}
                  >
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-2 right-3 text-xl font-bold text-amber-400 hover:text-red-500"
                    >
                      ✖
                    </button>
                    <h2 className="text-xl font-semibold mb-4 text-amber-400">
                      Enquiry Form
                    </h2>
                    <EnquiryForm />
                  </div>
                </div>
              )}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default OurProduct;
