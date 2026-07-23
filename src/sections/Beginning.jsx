import "./Beginning.css";

export default function Beginning() {
  return (
    <section className="beginning">

      <div className="beginning-content">

        <h2>
          Así comenzó todo...
        </h2>

        <p>
          Hay momentos que parecen pequeños,
          pero con el tiempo descubrimos que
          eran el inicio de algo mucho más grande.
        </p>

        <p>
          Sin saberlo, dos caminos comenzaron
          a encontrarse y poco a poco nació
          nuestra historia.
        </p>


        <div className="memory-photo">
          <img
            src="/images/primer-recuerdo.jpg"
            alt="Nuestro primer recuerdo"
          />
        </div>


        <p className="photo-text">
          Un momento que quizás parecía normal,
          pero que con el tiempo se volvió especial.
        </p>


      </div>

    </section>
  );
}