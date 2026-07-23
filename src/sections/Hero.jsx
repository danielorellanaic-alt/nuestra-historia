import "./Hero.css";

export default function Hero({ onStart }) {
  return (
    <section className="hero">

      <div className="overlay" />

      <div className="hero-content">
        <p className="hero-subtitle">
          Nuestra historia
        </p>

        <h1>
          Daniel
          <span>❤</span>
          Joshua
        </h1>

        <p className="hero-text">
          Una historia que comenzó sin imaginar
          <br />
          que terminaría siendo nuestro lugar favorito.
        </p>

        <button
          className="start-btn"
          onClick={onStart}
        >
          Comenzar
        </button>
      </div>

    </section>
  );
}