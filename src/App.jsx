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

    // Scroll lento y constante hacia la siguiente sección
    if (storyRef.current) {
      const targetPosition =
        storyRef.current.getBoundingClientRect().top + window.scrollY;

      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;

      const duration = 3000; // 3 segundos

      let startTime = null;

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(
          timeElapsed / duration,
          1
        );

        // Velocidad constante
        const ease = progress;

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