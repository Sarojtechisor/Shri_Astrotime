"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import Animation from "../../../Components/Animations/Galaxy-Animation/Animation";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  // Handle Captcha Change
  const handleCaptchaChange = (value: any) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  // Handle Form Submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }
    alert("Form submitted successfully!");
    // Handle form submission logic here
  };

  return (
    <div className={styles.ContactUsContainer}>
      <Animation />
      <Navbar />
      <div className={styles.ContactUsSubContainer}>
        <div className={styles.ContactUsSection1}>
          <h1 className={styles.ContentHeading}>Get In touch with Us</h1>
          <div className={styles.ContactUsSubSection1}>
            <div className="flex justify-center align-start content-start text-center">
              <img
                className={styles.SectionImg}
                src="/Images/Character/contactus.png"
                alt=""
              />
            </div>

            <div className="w-">
              <div>
                <label className="block font-medium text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full p-2 border rounded-md mt-1"
                  placeholder="Enter Full Name "
                />
              </div>
              <div>
                <label className="block font-medium mt-2 text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded-md mt-1"
                  placeholder="eg: abc@gmail.com"
                />
              </div>
              <div>
                <label className="block font-medium text-sm mt-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-2 border rounded-md mt-1"
                  placeholder="+(91) 99999-99999"
                />
              </div>
              <div className="mt-2">
                <label className="block font-medium">
                  Share any additional requirement{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="requirements"
                  required
                  className="w-full p-2 border rounded-md mt-1"
                  placeholder="You can write any additional requirements if any"
                />
              </div>

              {/* Google reCAPTCHA */}
              <div className="mt-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </div>

              <button
                type="submit"
                className="w-full  mt-4 text-white px-4 py-2 rounded-lg "
                id={styles.FormSubmitBtn}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className={styles.ContactUsSection2}>
        
        <iframe
          title="Shri Astrotime Map"
          src="https://www.google.com/maps/embed/v1/search?q=Shri+Astrotime&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          style={{
            height: '100%',
            width: '100%',
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
