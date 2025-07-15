"use client";
import React, { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import Animation from "../../../Components/Animations/Galaxy-Animation/Animation";
import PhraseChangingSection from "../../../Components/TypeWritter/TypeWritter";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EnquiryForm from "../../../Components/Enquiry-Form/enquiryForm";
import Loading from "../../../Components/Loading/loading";
import Footer from "../../../Components/Footer/Footer";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate API call
  }, []);
  return (
    <>
       {loading ? <Loading />: 
       
     <div className={styles.Container}>
     <div className={styles.HomepageSection1}>
       <Animation />
       <div className={styles.WatchImage1}>
         <img src="/Images/Watch-Images/Screenshot (14).png" alt="" />
       </div>
       <div className={styles.TypeWritterDiv}>
         <PhraseChangingSection />
       </div>
     </div>

     <div className={styles.HomepageSection2}>
       <div className="flex justify-center ">
         <img
           className={styles.Sectionimg}
           src="/Images/Watch-Images/English_Red.png"
           alt=""
         />
       </div>
       <div>
         <h1 className={styles.SectionHead}>Introducing Panchanga Clock..</h1>
         <p className={styles.SectionParagraph}>
           Shri Astrotime presents world’s first Panchanga Clock. This is an
           electronic clock that displays the key Panchanga Elements like
           Nakshatra, Rashi, Tithi, Lagna etc. with dials and pointers similar
           to a regular wall clock. The clock ties in Panchanga system with
           modern astronomical concepts with an electro-mechanical system and
           software and shows the real time position of the sun and the moon.
           This is a cultural, scientific, educative and decorative device.{" "}
           <br /> br Shri Astrotime proudly presents the world’s first
           Panchanga Clock, a groundbreaking fusion of ancient wisdom and
           modern technology. This innovative electronic clock goes beyond
           simply showing the time — it beautifully displays essential
           Panchanga elements such as Nakshatra, Rashi, Tithi, Lagna, and more,
           with rotating dials and pointers that resemble a traditional wall
           clock.
         </p>
         <button className={styles.SectionButton}>Click Here</button>
       </div>
     </div>

     <div className={styles.HomepageSection3}>
       <div className="flex justify-center ">
         <img
           className={styles.Sectionimg}
           src="/Images/Watch-Images/Kannada_Green.png "
           alt=""
         />
       </div>
       <div>
         <h1 className={styles.SectionHead}>Utility Of Panchanga Clock</h1>
         <p className={styles.SectionParagraph}>
           Panchanga is a sacred reference document for Hindus and depicts
           thousands of years of Samskara, culture and astronomical history and
           is to be preserved in every Indian home and public places including
           temples and worship places. All festivals of India, special
           occasions like marriage, naming ceremonies, special Poojas, Homas,
           Vratas, etc. are based on Panchanga system of time keeping. This
           ancient Indian system of time keeping, called Panchanga, is used
           extensively in Indian societ
           <br />
           Panchanga Clock helps everyone to get a basic understanding of the
           various elements involved in Panchanga and read out key elements
           like Tithi, Nakshatra, Rashi, Lagna etc., easily. It displays the
           relative positions of the Sun and the Moon w.r.t. Earth’s horizon
           and also w.r.t. the Stars using pointers and dials.
           <br />
           This clock is conceived to be used in homes, temples, offices and
           hospitals. This is a time and calendar system that also indicates
           various festivals and national holidays. It is customized for
           various places depending on latitude and longitude, language and
           time zones. This clock can be used by both sections of society who
           follow Solar or Lunar calendar systems.
         </p>
         <button className={styles.SectionButton}>Click Here</button>
       </div>
     </div>

     <div className={styles.HomepageSection4}>
       <div>
         <img
           className={styles.CharacterImg}
           src="/Images/Character/ctaThumb-removebg-preview (1).png"
           alt=""
         />
       </div>

       <div className={styles.BuyingDiv}>
         <div>
           <h1 className={styles.ContentHead}>
             Interested in buying our panchanga clock?
           </h1>
           <p className={styles.ContentParagraph}>
             Select your preference and book the order now.
           </p>
         </div>
         <div className="">
           <button className={styles.SectionButton} onClick={() => setShowPopup(true)}>Buy Now <i className="bi bi-cart"></i> </button>
         </div>
       </div>
     </div>
     {showPopup && (
               <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm pt-1 z-[9999]" >
                 <div className=" bg-opacity-30 p-5 rounded-lg shadow-xl w-full max-w-3xl relative z-[10000]" id={styles.PopupForm}>
                   <button
                     onClick={() => setShowPopup(false)}
                     className="absolute top-2 right-3 text-xl font-bold text-amber-400 hover:text-red-500"
                   >
                     ✖
                   </button>
                   <h2 className="text-xl font-semibold mb-4 text-amber-400">Enquiry Form</h2>
                   <EnquiryForm />
                 </div>
               </div>
             )}

     <Footer/>        
   </div>
  }
    </>
  );
};

export default HomePage;
