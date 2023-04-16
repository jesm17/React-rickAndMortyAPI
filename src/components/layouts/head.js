import imgRick from "../../../src/assets/img/rick.svg";
import imgMorty from "../../../src/assets/img/morty.svg";
import portal from "../../../src/assets/img/portal.png";
import "../../App.css";
export function Head() {
  return (
    <div className=" h-100 w-100 head ">
      <section className="image-section w-100 h-auto ">
        <div className="image d-flex justify-content-center w-100">
          <div className="ms-4 ps-4 d-flex justify-content-center w-100 ">
            <img
              src={imgRick}
              alt="Imagen"
              className=" w-100 "
              id="characterImg"
              // style={{ width: "25%", height: "100%" }}
            />
          </div>
          <div className="d-flex justify-content-center w-100">
            <img
              src={portal}
              alt=""
              className="portal "
              style={{ width: "550px" }}
            ></img>
          </div>

          <div className="me-4 pe-4 d-flex justify-content-center w-100 ">
            <img
              src={imgMorty}
              alt="Imagen"
              className="w-100"
              id="characterImg"
              // style={{ width: "25%", height: "100%" }}
            />
          </div>
        </div>
        <div className="text-overlay ">
          <h2 id="text-main">The Rick and Morty API</h2>
        </div>
      </section>
    </div>
  );
}
