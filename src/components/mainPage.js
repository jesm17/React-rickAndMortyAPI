import React, { useEffect, useState } from "react";
import base_url from "./../enviroment";
import axios from "axios";
import { Headers } from "./layouts/headers";
import { Head } from "./layouts/head";
import { Footer } from "./layouts/footer";
import "./../App.css";
import {
  ModalButtonLocation,
  LocationModalInfo,
} from "./../components/modals/modalLocations";

function NavPage({ page, setPage, totalPages }) {
  if (page === 1) {
    return (
      <div className="d-flex align-items-center mb-4">
        <div className="ms-1 me-1">
          <button className="btn btn-danger" style={{ display: "none" }}>
            <i className="bi bi-chevron-left fs-6"></i>
          </button>
        </div>
        <div
          className="d-flex align-items-center ms-1 me-1 p-1"
          style={{
            background: "#3c3e44c2",
            borderRadius: "10%",
          }}
        >
          <span className="text-white">
            {page} - {totalPages}
          </span>
        </div>
        <div className="ms-1 me-1">
          <button
            className="btn btn-success"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <i className="bi bi-chevron-right fs-6"></i>
          </button>
        </div>
      </div>
    );
  } else if (page > 1 && page < totalPages) {
    return (
      <div className="d-flex align-items-center mb-4">
        <div className="ms-1 me-1">
          <button
            className="btn btn-danger"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <i className="bi bi-chevron-left fs-6"></i>
          </button>
        </div>
        <div
          className="d-flex align-items-center ms-1 me-1 p-1"
          style={{
            background: "#3c3e44c2",
            borderRadius: "10%",
          }}
        >
          <span className="text-white">
            {page} - {totalPages}
          </span>
        </div>
        <div className="ms-1 me-1">
          <button
            className="btn btn-success"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <i className="bi bi-chevron-right fs-6"></i>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex align-items-center m-4">
        <button
          className="btn btn-danger"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <i className="bi bi-chevron-left fs-6"></i>
        </button>
        <div
          className="d-flex align-items-center ms-1 me-1 p-1"
          style={{
            background: "#3c3e44c2",
            borderRadius: "10%",
          }}
        >
          <span className="text-white">
            {page} - {totalPages}
          </span>
        </div>
        <div className="ms-1 me-1">
          <button
            className="btn btn-success"
            onClick={() => {
              setPage(page + 1);
            }}
            style={{ display: "none" }}
          >
            <i className="bi bi-chevron-right fs-6"></i>
          </button>
        </div>
      </div>
    );
  }
}

function Characters() {
  document.title = "Rick and Morty API";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`${base_url}/character?page=${page}`);
      const { results, info } = data.data;
      setCharacters(results);
      setInfo(info);
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <div className="w-100 " id="main">
        <div className="row row-cols-2 w-100 d-flex align-items-start ps-2">
          {characters.map((character) => (
            <div className="col mt-4 mb-2 w-50 " key={character.id}>
              <div className="card mb-3 h-100  " id="card-full">
                <div className="row g-0 h-100 ">
                  <div className="col-md-4">
                    <img
                      draggable="false"
                      src={character.image}
                      alt={character.name}
                      className="img-fluid rounded-start h-100"
                    />
                  </div>
                  <div className="col-md-8 h-100 card-body rounded-end border border-secondary">
                    <div className=" h-100 ">
                      <h5 className="card-title">
                        {character.name.toUpperCase()}
                      </h5>
                      <StatusCharacter
                        status={character.status}
                        species={character.species}
                      ></StatusCharacter>
                      <Gender gender={character.gender}></Gender>
                      <h6>
                        Origen:&nbsp;
                        <ModalButtonLocation
                          url={character.origin.url}
                          origen={character.origin.name}
                        ></ModalButtonLocation>
                      </h6>
                      <h6>
                        Location:&nbsp;
                        <ModalButtonLocation
                          url={character.location.url}
                          origen={character.location.name}
                        ></ModalButtonLocation>
                      </h6>
                      <Type type={character.type} />{" "}
                    </div>
                  </div>
                </div>
              </div>

              <LocationModalInfo
                url={character.origin.url}
                name={character.origin.name}
              ></LocationModalInfo>
              <LocationModalInfo
                url={character.location.url}
                name={character.location.name}
              ></LocationModalInfo>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4 ">
          <p className="text-white">Total personajes: {info.count}</p>
        </div>
        <div className="d-flex justify-content-center ">
          <NavPage
            page={page}
            setPage={setPage}
            totalPages={info.pages}
          ></NavPage>
        </div>
      </div>
    </div>
  );
}

function Gender({ gender }) {
  let h6;
  let maleColor = "#8bd3dd";
  let famaleColor = "#f582ae";
  let unknownColor = "#e45858";
  if (gender === "Male") {
    h6 = (
      <h6>
        Gender: <span style={{ color: `${maleColor}` }}>{gender}</span>{" "}
        <span>
          <i
            className="bi bi-gender-male"
            style={{ color: `${maleColor}`, fontSize: "15px" }}
          ></i>
        </span>{" "}
      </h6>
    );
  } else if (gender === "Female") {
    h6 = (
      <h6>
        Gender: <span style={{ color: `${famaleColor}` }}>{gender}</span>{" "}
        <span>
          <i
            className="bi bi-gender-female"
            style={{ color: `${famaleColor}`, fontSize: "15px" }}
          ></i>
        </span>{" "}
      </h6>
    );
  } else {
    h6 = (
      <h6>
        Gender: <span style={{ color: `${unknownColor}` }}>unknown</span>{" "}
      </h6>
    );
  }

  return h6;
}
function Type({ type }) {
  let h6;
  if (type) {
    h6 = <h6>Type: {type}</h6>;
  } else {
    h6 = (
      <h6>
        Type: <span style={{ color: "#e45858" }}>without data</span>{" "}
      </h6>
    );
  }
  return h6;
}

function StatusCharacter(props) {
  const status = props.status;
  const species = props.species;
  let statusColor;

  if (status === "Alive") {
    statusColor = (
      <div className="section">
        <span className="status">
          <span className="status_icon">
            Status: {status} &nbsp;
            <i className="bi bi-circle-fill" style={{ color: "#2cb67d" }}></i>
          </span>
          <br></br>
          Spice: {species}
        </span>
      </div>
    );
  } else if (status === "Dead") {
    statusColor = (
      <div className="section">
        <span className="status">
          <span className="status_icon">
            Status: {status} &nbsp;
            <i className="bi bi-circle-fill" style={{ color: "#e45858" }}></i>
          </span>
          <br></br>
          Spice: {species}
        </span>
      </div>
    );
  } else {
    statusColor = (
      <div className="section">
        <span className="status">
          <span className="status_icon">
            Status: {status} &nbsp;
            <i className="bi bi-circle-fill " style={{ color: "#c5c8d1" }}></i>
          </span>
          <br></br>
          Spice: {species}
        </span>
      </div>
    );
  }

  return <div>{statusColor}</div>;
}

function MainPage() {
  return (
    <div>
      <Headers></Headers>
      <Head></Head>
      <Characters />
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default MainPage;
