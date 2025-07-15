"use client"
import Image from "next/image";
import Navbar from "../../Components/Navbar/Navbar";
import HomePage from "./home-page/page";
import Footer from "../../Components/Footer/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/loading";
import OurProduct from "./our-product/page";
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);
    // getData ();
    router.prefetch("/");
    
    return () => {
      // Cleanup (No router.events in App Router)
    };
  }, [router]);
  return (
    <>
    {loading && <Loading />}
      {<Navbar/>}
      {<HomePage/>}
      {/* {<Footer/>} */}
    </>
  );
}
