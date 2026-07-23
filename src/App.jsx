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

    // Bajar suavemente a la siguiente sección
    if (storyRef.current) {
      storyRef.current.scrollIntoView({
        behavior: "smooth",
      });
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