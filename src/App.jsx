import Hero from "./sections/Hero";

function App() {

  const startExperience = () => {
    console.log("Comenzó la historia ❤️");
  };

  return (
    <Hero onStart={startExperience} />
  );
}

export default App;