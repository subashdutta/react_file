import "./Subar.css";

import { FaFileUpload } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Subar = ({ setiscreatdfolder }) => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-white px-4">
      <p className="small">Root</p>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <button
            className="btn btn-outline-dark"
            style={{
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <FaFileUpload />
            uploadfile
          </button>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            {" "}
            <FaFile />
            Createfile
          </button>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            className="btn btn-outline-dark"
            onClick={() => setiscreatdfolder(true)}
          >
            <FaFolder />
            Create folder
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Subar;
