
import imgRick from "../../../src/assets/img/rick.svg";
import imgMorty from "../../../src/assets/img/morty.svg";
export function Head() {
    return (
      <div className="" style={{ backgroundColor: "#F5F5F5" }}>
        <section className="image-section">
          <div className="image d-flex justify-content-center">
            <img src={imgRick} alt="Imagen" className="w-25" />
            <img src={imgMorty} alt="Imagen" className="w-25" />
          </div>
          <div className="text-overlay">
            <h2 id="text-main">The Rick and Morty API</h2>
          </div>
        </section>
      </div>
    );
  }