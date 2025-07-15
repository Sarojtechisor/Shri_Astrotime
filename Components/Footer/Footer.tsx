import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const footerLinksData = [
    {
      title: "Site Links",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Our Product", url: "/our-product" },
        { name: "Contact Us", url: "/contact-us" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { name: "Terms & Conditions", url: "/terms-conditions" },
        { name: "Refund & Cancellation", url: "/refund-cancellation" },
        { name: "Warranty & Support", url: "/warranty-support" },
        { name: "Shipping Charges", url: "/shipping-charges" },
      ],
    },
  ];

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterSubContainer}>
        <div className="flex flex-col gap-5">
          <div>
            <img
              className={styles.FooterImg}
              src="/Images/Logo/ShriAstrotime_Logo_317x64.png"
              alt="Logo"
            />
          </div>
          <div>
            <p className={styles.FooterParagraph}>
              We are a startup company with a mission to preserve the tradition
              of Panchanga system in every Indian home, Temple and other public
              spaces.
            </p>
          </div>
          <div className={styles.FooterScocialIcons}>
            <div>
              <i className="bi bi-facebook hover:bg-blue-500 rounded-lg p-2 hover:border-blue-500 duration-300 transition-all"></i>
            </div>
            <div>
              <i className="bi bi-instagram hover:bg-red-500 rounded-lg p-2 hover:border-red-500 duration-300 transition-all"></i>
            </div>
            <div>
              <i className="bi bi-twitter-x hover:bg-black rounded-lg p-2 hover:border-blue-500 duration-300 transition-all"></i>
            </div>
            <div>
              <i className="bi bi-linkedin hover:bg-blue-500 rounded-lg p-2 hover:border-blue-500 duration-300 transition-all"></i>
            </div>
          </div>
        </div>
        <div className={styles.FooterLinksDiv}>
          {footerLinksData.map((section, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h2 className={styles.FooterLinkHead}>{section.title}</h2>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className={`${styles.FooterParagraph} ${styles.FooterLinks}`}
                  >
                    <i className="bi bi-caret-right-fill"></i>{" "}
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`${styles.FooterContact} `}>
          <div className="flex flex-col gap-5">
            <h2 className={styles.FooterLinkHead}>Get In Touch With Us</h2>
            <p
              className={`${styles.FooterParagraph} ${styles.FooterContactParagraph}`}
            >
              No 19/1, Room No-21, 1st Cross, N. S. Palya, BTM 2nd Stage,
              Bannerghatta Road, Bengaluru – 560076
              <br />
              Ph: +91 95915 92947 / +91 93412 52567
              <br />
              Email: support@shriastrotime.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;