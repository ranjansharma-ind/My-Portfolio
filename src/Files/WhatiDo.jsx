import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";

function WhatiDo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [show, setShow] = useState(false);
  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };
  return (
    <div className="whatido row">
      <h3>projects & gallery</h3>
      {data.map((data, i) => {
        return (
          <div
            className="col-lg-4 image-container justify-content-center d-flex"
            onMouseOver={showOverlay}
            onMouseLeave={hideOverlay}
          >
            <img src={data.image} alt="Imag" style={{ height: "400px" }} />
            {show && (
              <div className="overlay" key={i}>
                <h2>{data.title}</h2>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default WhatiDo;
