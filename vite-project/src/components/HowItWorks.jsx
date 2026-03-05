export default function HowItWorks() {
  return (
    <section className="section section--muted" id="so-gehts">
      <div className="container container--wide">
        <h2 className="sectionTitle">So einfach geht’s</h2>

        <div className="howGrid">
          {/* LEFT: steps */}
          <div className="howSteps">
            <div className="howCard">
              <div>
                <strong>1. App herunterladen</strong>
                <div style={{ marginTop: 6, fontWeight: 500, opacity: 0.8 }}>
                  Im App Store oder bei Google Play installieren und
                  registrieren.
                </div>
              </div>
            </div>

            <div className="howCard">
              <div>
                <strong>2. Finden & Aufschließen</strong>
                <div style={{ marginTop: 6, fontWeight: 500, opacity: 0.8 }}>
                  Bike in der Nähe wählen und per QR Code entsperren.
                </div>
              </div>
            </div>

            <div className="howCard">
              <div>
                <strong>3. Parken</strong>
                <div style={{ marginTop: 6, fontWeight: 500, opacity: 0.8 }}>
                  Verantwortungsbewusst abstellen ohne Wege zu blockieren.
                </div>
              </div>
            </div>

            <div className="howCard">
              <div>
                <strong>4. Abschließen</strong>
                <div style={{ marginTop: 6, fontWeight: 500, opacity: 0.8 }}>
                  Schloss schließen und Fahrt in der App beenden.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: app preview */}
          <div className="howPreview">
            <img
              className="howPreviewImg"
              src="/images/app.png"
              alt="SenfBike App Vorschau"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
