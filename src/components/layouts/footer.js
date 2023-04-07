export function Footer() {
  return (
    <div
      id="footer"
      style={{ backgroundColor: "rgb(32,35,41)" }}
      className="h-auto"
    >
      <div className="d-flex justify-content-center p-4">
        <div style={{ fontSize: "30px" }}>
          <span className="">API: </span>
          <a
            href="https://rickandmortyapi.com/"
            id="api"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Rick and Morty API &nbsp;
            <img
              src="https://rickandmortyapi.com/icons/icon-48x48.png?v=1538abef51e33ef514e8fe1ab9aeab4e"
              alt="https://rickandmortyapi.com/"
            ></img>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h6>
          <i className="bi bi-code-slash" style={{ fontSize: "17px" }}></i>
          <span> Juan Sanchez </span>
        </h6>
      </div>

      <div className="d-flex justify-content-center pb-4">
        <a
          href="https://www.linkedin.com/in/juan-estiben-s%C3%A1nchez-mart%C3%ADnez-30b54a1b0"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
          className="mx-2"
        >
          <i className="bi bi-linkedin" style={{ fontSize: "17px" }}></i>
        </a>
        <a
          href="https://github.com/jesm17"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
          className="mx-2 "
        >
          <i className="bi bi-github" style={{ fontSize: "17px" }}></i>
        </a>
      </div>
    </div>
  );
}
