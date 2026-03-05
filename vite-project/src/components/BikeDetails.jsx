export default function BikeDetails() {
  return (
    <section id="bike" className="section">
      <div className="container">
        <h2>Ein Bike. Perfekt für Senftenberg.</h2>
        <p>
          Robust, bequem und gemacht für kurze Wege – vom Campus zum See, vom
          Bahnhof nach Hause.
        </p>

        <div className="grid3">
          <div className="card">
            <h3>✔ Komfortabel</h3>
            <p>
              Aufrechte Sitzposition, tiefer Einstieg – ideal für Alltag und
              Freizeit.
            </p>
          </div>

          <div className="card">
            <h3>✔ Robust & sicher</h3>
            <p>Wartungsarm, stabil gebaut und für häufige Nutzung ausgelegt.</p>
          </div>

          <div className="card">
            <h3>✔ App-basiert</h3>
            <p>
              Finden, entsperren und zurückgeben – alles einfach per SenfBike
              App.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
