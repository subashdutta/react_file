import { useState, useEffect } from "react";
import axios from "axios";

import Foldercom from "./Foldercom";

const Loadedfile = () => {
  const url = "http://192.168.1.85:8085/";
  const [uploadedata, setuploadedata] = useState([]);

  const params = "C://Projects/nectarautomation/file";

  useEffect(() => {
    const upload = async () => {
      const res = await axios.get(
        `${url}api/file/list/path?path=${params}/upload`
      );
      const uploade = res?.data?.data;
      console.log(uploade);
      setuploadedata(uploade);
    };
    upload();
  }, []);
  return (
    <div className=" col-md-12 w-100">
      {uploadedata.length > 0 && (
        <Foldercom title={"uploade file"} type={"Upload"} items={uploadedata} />
      )}
    </div>
  );
};

export default Loadedfile;
