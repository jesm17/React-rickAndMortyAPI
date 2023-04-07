import { Footer } from "./layouts/footer";
import { Head } from "./layouts/head";
import { Headers } from "./layouts/headers";
import "../static/notFound.css";
import { Link } from "react-router-dom";
export function NotFound() {
  var url = document.URL;
  document.title = "Page Not Found: " + url.split("/").pop();
  let ramdonPhrase = Ramdonphrase();
  console.log(ramdonPhrase);
  return (
    <div className="w-100" style={{ backgroundColor: "rgb(39, 43, 51)" }}>
      <Headers />
      <Head />
      <div className="d-flex justify-content-center w-100">
        <h6 id="number">404</h6>
      </div>
      <div className="d-flex justify-content-center w-100">
        <h6 id="not-found">Not Found</h6>
      </div>
      <div id="ramdonPhrase" className="d-flex justify-content-center w-100">
        <h6>
          {ramdonPhrase}
          <span
            style={{
              color: "rgb(255, 152, 0)",
            }}
          >
            *
          </span>{" "}
        </h6>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h5 style={{ color: "rgb(255, 152, 0)", fontSize: "9px" }}>
          *: Las frases son de la serie de Rick and Morty, se seleccionan de
          manera aleatoria y no tienen ánimo de ofender, ni representar alguna
          creencia ni estereotipo de ningún índole{" "}
        </h5>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/" id="link-to-main-page">
          Ir a la pagina principal
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function Ramdonphrase() {
  let phrases = [
    "No te rompas un brazo masturbándote.",
    "Bueno, no me gustan tus genes desempleados en mis nietos, Jerry, pero la vida está hecha de pequeñas concesiones.",
    "Hoy has sido un Morty total; esa es mi nueva palabra para la mierda después de los eventos de hoy.",
    "Es como si la palabra n y la palabra c tuvieran un bebé y fue criado por todas las malas palabras para los judíos.",
    "Entonces, ¿cuál es tu origen? ¿Caíste en una tina de redundancia?",
    "Pensé que el objetivo de tener un perro era sentirme superior, Jerry. Si yo fuera tú, no tiraría de ese hilo.",
    "¡Creé las estrellas que se convirtieron en el carbono en los ovarios de tu madre!!!",
    "No me importa lo que pienses, Jerry.",
    "Científicamente, las tradiciones son una cosa idiota.",
    "Lick lamer mis bolas!",
    "Ooh-la-la, alguien va a echar un polvo en la universidad.",
    "Esta vez, sé como el abuelo. ¿Te refieres a borracho?",
    '¡Jódete, Rick! Yo también te purgaré, viejo... "Un pedazo de basura "despiadado!',
    "Oh Summer, primera guerra racial, ¿eh?",
    "¡No puedo soportar más esto! ¡Preferiría respirar veneno que pasar otro minuto viviendo contigo!",
    "¿Y qué hay acerca de la realidad donde Hitler curó el cáncer, Morty? La respuesta es: no pienses en ello.",
    "Puede ser que coma cerebros y exhale SIDA espacial.",
    "Genial, ahora tengo que apoderarme de todo un planeta por tus estúpidos senos.",
    "Los jóvenes predarán de los viejos si se los permites, Jerry.",
    "Mucha gente pagaría buen dinero por diezmar a la población. Y solamente aceptaré la oferta más alta.",
    "Ey, Jerry, ¿estás aquí siendo un estúpido?",
    "Me rondan los pensamientos incontrolables de mutilación y acoso sexual diariamente, pero canalizo todo eso a través de mi trabajo.",
    "¿Aún piensas que es una buena idea andar atravesando agujeros sin tener un pene?",
    "¡Lámeme, lámeme, lámeme las pelotas!",
    "¡Estoy tratando de reparar el arma creadora de portales con partes de una muñeca sexual y tengo que hacerlo con una sola mano!",
    "Gonorrea no puede vernos si no nos movemos. Esperen, estoy equivocado. Estaba pensando en un T. Rex.",
    "Las bodas son básicamente funerales con un pastel.",
    "Sácales el dedo Morty, les dije que significa que hay paz entre los mundos. ¿No es gracioso?",
    "Estás creciendo, Morty. Creciendo como una enorme espina dentro de mi trasero.",
    "Escucha, Morty. Lamento decirlo, pero lo que la gente llama 'amor' es sólo una reacción química que motiva a los animales a aparearse.",
  ];
  let index = Math.floor(Math.random() * (phrases.length + 1));
  let phrase = phrases[index];
  return phrase;
}
