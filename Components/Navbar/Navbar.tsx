"use client"
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EnquiryForm from '../Enquiry-Form/enquiryForm';

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('');
   const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <div>
      <nav className={styles.NavContainer}>
        <div className={styles.NavImageDiv}>
          <img
            className={styles.NavImage}
            src="/Images/Logo/ShriAstrotime_Logo_317x64.png"
            alt="Logo"
          />
        </div>
        <div>
          <ul className={styles.NavLinks}>
            <li className={currentPath === '/' ? styles.active : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={currentPath === '/our-product' ? styles.active : ''}>
              <Link href="/our-product">Our Product</Link>
            </li>
            <li className={currentPath === '/about-us' ? styles.active : ''}>
              <Link href="/about-us">About Us</Link>
            </li>
            <li className={currentPath === '/contact-us' ? styles.active : ''}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-content-center align-middle">
          <button className={styles.NavButton} onClick={() => setShowPopup(true)}>Book Now</button>
        </div>
      </nav>
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
    </div>
  );
};

export default Navbar;