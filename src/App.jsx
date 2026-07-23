import { useRef } from "react";
import Hero from "./sections/Hero";
import song from "./assets/music/Enamorado.mp3";

function App() {
  const audioRef = useRef(null);
  const storyRef = useRef(null);

  const startExperience = () => {
    // Iniciar música
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Scroll suave personalizado
    if (storyRef.current) {
      const targetPosition = storyRef.current.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 2500; // duración en milisegundos

      let startTime = null;

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Efecto de suavizado (acelera y desacelera)
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(
          0,
          startPosition + distance * ease
        );

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={song}
        loop
      />

      <Hero onStart={startExperience} />

      <section
        ref={storyRef}
        className="story-section"
      >
        <h2>
          Nuestra historia ❤️
        </h2>

        <p>
          Aquí comenzará nuestra historia...
        </p>
      </section>
    </>
  );
}

export default App;