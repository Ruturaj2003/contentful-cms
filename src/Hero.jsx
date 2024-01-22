import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Transom log broadside deadlights schooner rigging plunder measured
            fer yer chains gun hang the jib. Line mizzenmast chase heave down
            careen topsail measured fer yer chains scuppers strike colors ho.
            Nipper chantey take a caulk lateen sail plunder loot Arr parrel snow
            splice the main brace.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Gg Wp" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
