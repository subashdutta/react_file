/* eslint-disable react/prop-types */
import { FaCloudUploadAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Foldercom = ({ title, items, type }) => {
  return (
    <div className="w-100">
      <h4 className="text-center border-bottom"> {title}</h4>
      <div className="row gap-2 py-4 flex-wrap ">
        {items.map((item, index) => {
          return (
            <p
              key={index * 55}
              className="col-md-2 border d-flex justify-content-center flex-column"
            >
              {type === "Upload" ? (
                <FaCloudUploadAlt
                  style={{
                    display: "flex",
                    fontSize: "50px",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginBottom: "5px",
                  }}
                />
              ) : (
                <FaCloudUploadAlt />
              )}

              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Foldercom;
