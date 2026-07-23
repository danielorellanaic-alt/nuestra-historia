import Hero from "./sections/Hero";
import song from "./assets/music/cancion.mp3";
import { useRef } from "react";

function App() {

  const audioRef = useRef(null);

  const startExperience = () => {
    console.log("Comenzó la historia ❤️");

    audioRef.current.play();
  };

  return (
    <>
      <audio 
        ref={audioRef}
        src={song}
        loop
      />

      <Hero onStart={startExperience} />
    </>
  );
}

export default App;