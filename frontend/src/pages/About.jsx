import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main style={{padding:"30px"}}>
        <h1>About</h1>

        <p>
          This project provides AI-powered
          crop advisory support.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;