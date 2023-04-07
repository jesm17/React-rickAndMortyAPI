import React, { useEffect, useState } from "react";
import axios from "axios";
import "./modalLocation.css";
import base_url from "../../enviroment";

export function ModalButtonLocation(props) {
  let url = props.url;
  let origen = props.origen;
  let id_location = url.split("/").pop();
  let button;
  if (origen === "unknown") {
    button = <span className="origenUnknown">{origen}</span>;
  } else {
    button = (
      <span
        className="dataModal"
        data-bs-toggle="modal"
        data-bs-target={`#LocationModal${id_location}`}
      >
        {origen}
      </span>
    );
  }
  return button;
}


export function LocationModalInfo(props) {
  let url = props.url;
  let name = props.name;
  let id_location = url.split("/").pop();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`${base_url}/location/${id_location}`);
      setData(res.data);
    }
    getData();
  }, [id_location]);
  if (name !== "unknown") {
    return (
      <div
        className="modal fade"
        id={`LocationModal${id_location}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modal-bg">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ModalLocationTitle">
                {data.name}
              </h1>
              <button
                type="button"
                className="btn-close bg-body"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeButton"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#ffffff00", color: "white" }}
                >
                  Name: <span>{data.name}</span>
                </li>
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#ffffff00", color: "white" }}
                >
                  Dimension: <span>{data.dimension}</span>
                </li>
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "#ffffff00", color: "white" }}
                >
                  Type: <span>{data.type}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
