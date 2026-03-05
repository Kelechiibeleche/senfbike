import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  // 1) List of background images (public folder paths)
  const slides = useMemo(
    () => ["/images/station.jpeg", "/images/bike.jpeg"],
    [],
  );

  // 2) current slide index + fade helper
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // change every 5 seconds
    const interval = setInterval(() => {
      // start fade out
      setIsFading(true);

      // after short fade, switch image, then fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setIsFading(false);
      }, 450);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      {/* full width background slider */}
      <div
        className={`hero__image ${isFading ? "isFading" : ""}`}
        style={{ backgroundImage: `url(${slides[index]})` }}
        aria-hidden="true"
      />

      <div className="container">
        <div className="hero__inner hero__inner--split">
          {/* LEFT: text */}
          <div className="hero__content">
            <h1>App holen und SenfBike fahren!</h1>
            <p>
              Bike-Sharing in Senftenberg: finden, entsperren und losfahren –
              perfekt für Campus, See und Alltag.
            </p>

            <div className="hero__actions">
              <a className="btn btn--accent" href="#app">
                App holen
              </a>
              <a className="btn btn--primary" href="#so-gehts">
                So geht’s
              </a>
            </div>

            <div className="storeRow" aria-label="App stores">
              <span className="storeBadge">App Store</span>
              <span className="storeBadge">Google Play</span>
            </div>
          </div>

          {/* RIGHT: floating image */}
          <div className="hero__floatWrap">
            <img
              className="hero__floatImg"
              src="/images/hero-float.png"
              alt="SenfBike App Vorschau"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
