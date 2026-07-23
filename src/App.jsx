import { useRef } from "react";
import Hero from "./sections/Hero";
import song from "./assets/music/cancion.mp3";

function App() {
  const audioRef = useRef(null);
  const storyRef = useRef(null);

  const startExperience = () => {
    // Iniciar música
    audioRef.current.play();

    // Bajar suavemente a la siguiente sección
    storyRef.current.scrollIntoView({
      behavior: "smooth",
    });
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