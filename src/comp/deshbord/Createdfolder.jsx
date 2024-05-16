import { useState } from "react";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Createdfolder = ({ setiscreatdfolder }) => {
  const [FolderName, setFolderName] = useState("");

  const handelsubmit = (e) => {
    e.preventDefault();

    if (FolderName) {
      if (FolderName.length > 3) {
        localStorage.setItem(" new folder name is ", FolderName);
        alert("folder is created " + FolderName);
      } else {
        alert("foldre name most have 3 latter ");
      }
    } else {
      alert(" folder cant be empty");
    }
  };
  return (
    <div
      className=" col-md-12 position-fixed top-0 left-0 w-100 h-100"
      style={{ background: "rgba(0,0,0,0.4", zIndex: 999 }}
    >
      <div className=" row align-items-center justify-content-center">
        <div className="col-md-4 mt-5 bg-white rounded p-4">
          <div className="d-flex justify-content-between">
            <h4>created folder</h4>
            <button className="btn" onClick={() => setiscreatdfolder(false)}>
              <IoMdClose className="text-black small" />
            </button>
          </div>
          <hr />
          <div className="d-flex flex-column align-item-center">
            <form className="mt-3 w-100" onSubmit={handelsubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="folderName"
                  placeholder="Folder Name"
                  onChange={(e) => setFolderName(e.target.value)}
                  value={FolderName}
                />
              </div>
              <button className="btn btn-primary mt-1 form-control">
                create folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createdfolder;
