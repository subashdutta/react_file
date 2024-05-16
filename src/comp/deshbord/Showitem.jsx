/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { IoIosFolderOpen } from "react-icons/io";
import { FaFileImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Showitem = ({ title, items, type }) => {
  const navigate = useNavigate();
  const handledbclicked = async () => {
    navigate("/uploade_file");
  };

  document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
  });

  return (
    <div className="w-100">
      <h4 className="text-center border-bottom"> {title}</h4>
      <div className="row gap-2 px-5 py-4 flex-wrap   ">
        {items.map((item, index) => {
          return (
            <p
              key={index * 55}
              className="col-md-2  border  d-flex justify-content-center align-items-center flex-column  "
              onDoubleClick={() => handledbclicked(item)}
            >
              {type === "folder" ? (
                <IoIosFolderOpen
                  style={{
                    display: "flex",
                    fontSize: "50px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBottom: "5px",
                  }}
                />
              ) : (
                <FaFileImage />
              )}
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Showitem;
