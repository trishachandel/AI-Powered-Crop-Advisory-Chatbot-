import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          padding:"20px"
        }}
      >
        <Card
          title="Disease Detection"
          description="Get crop disease guidance."
        />

        <Card
          title="Pest Management"
          description="Learn pest control methods."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;