import "./Memories.css";

import memory1 from "../assets/images/momento1.jpg";
import memory2 from "../assets/images/momento2.jpg";

export default function Memories() {
  return (
    <section className="memories">

      <div className="memories-content">

        <h2>
          Nuestros recuerdos ✨
        </h2>

        <p>
          Cada pequeño momento fue formando
          la historia que hoy podemos mirar
          con una sonrisa.
        </p>


        <div className="memory-grid">

          <div className="memory-card">

            <img
              src={memory1}
              alt="Nuestro recuerdo"
            />

            <p>
              Un momento que quedó guardado
              para siempre.
            </p>

          </div>


          <div className="memory-card">

            <img
              src={memory2}
              alt="Nuestro recuerdo"
            />

            <p>
              Otro recuerdo que hizo crecer
              nuestra historia.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}