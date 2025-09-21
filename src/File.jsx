import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";
import { useState } from "react";

export default function File() {
  const [folders, setFolders] = useState([]);

  const handleCreateFolder = () => {
    const folderName = window.prompt("Enter the name for your new folder:");
    if (folderName) {
      const newFolder = { id: Date.now(), name: folderName, items: [] };
      setFolders([...folders, newFolder]);
    }
  };

  const handleAddItem = (folderId) => {
    const itemName = window.prompt("Enter the name of the item:");
    if (itemName) {
      setFolders((prevFolders) =>
        prevFolders.map((folder) =>
          folder.id === folderId
            ? {
                ...folder,
                items: [...folder.items, { id: Date.now(), name: itemName }],
              }
            : folder
        )
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center gap-3  "
      style={{ marginTop: "40px" }}
    >
      <button type="button" className="btn btn-primary ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "20px",
          }}
        >
          <FaCloudUploadAlt />
          Upload
        </div>
      </button>
      <button type="button" className="btn btn-secondary">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "20px",
          }}
        >
          <IoMdCreate />
          Created File
        </div>
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleCreateFolder}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "20px",
          }}
        >
          <MdCreateNewFolder />
          Create Folder
        </div>
      </button>

      <div>
        {folders.map((folder) => (
          <div key={folder.id} style={{ marginBottom: "10px" }}>
            <h3>{folder.name}</h3>
            <button
              className="btn btn-primary"
              onClick={() => handleAddItem(folder.id)}
            >
              Add Item
            </button>
            <ul>
              {folder.items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
