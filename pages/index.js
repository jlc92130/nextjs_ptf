export default function index() {
  return (
    <>
      <header>
        <div className="container">
          <h1 style={{ margin: 0 }}>JLC</h1>
          <nav>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                margin: 0,
                padding: 0,
                gap: "15px",
              }}
            >
              <li>
                <a href="">ACCUEIL</a>
              </li>
              <li>
                <a href="">PROJETS</a>
              </li>
              <li>
                <a href="">A PROPOS</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        <h1>Portefolio</h1>
      </main>
      <footer className="container">@</footer>
    </>
  );
}
