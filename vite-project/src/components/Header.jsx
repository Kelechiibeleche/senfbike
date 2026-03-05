export default function Header() {
  return (
    <header className="header">
      <div className="header__full">
        <div className="container header__inner">
          <div className="brand">SenfBike</div>

          <nav className="nav">
            <a href="#bike">Das Bike</a>
            <a href="#so-gehts">So geht’s</a>
            <a href="#preise">Preise</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a className="btn btn--primary" href="#app">
            App downloaden
          </a>
        </div>
      </div>
    </header>
  );
}
