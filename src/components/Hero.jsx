import HeroBanner from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="w-full h-screen"
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "800px",
      }}
    >
        <div></div>
    </section>
  );
};

export default Hero;
