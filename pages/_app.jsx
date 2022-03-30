import "./index.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Content from "./components/Content";
import Suscribe from "./components/Suscribe";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <head>
        <title>Geek Vibes | Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <Navbar />
      <Hero />
      <Featured />
      <Content />
      <Suscribe />
      <Footer />
    </>
  );
}
