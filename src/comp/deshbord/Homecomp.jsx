import { useEffect, useState } from "react";
import Showitem from "./Showitem";
import axios from "axios";

function Homecomp() {
  const url = "http://192.168.1.85:8085/";

  const [folder, setfolder] = useState([]);

  const params = "C://Projects/nectarautomation/file";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${url}api/file/list/path?path=${params}`);
      //   console.log(res?.data?.data); // folder

      const folders = res?.data?.data;

      setfolder(folders);

      //   console.log(folders);
    };

    fetchData();
  }, []);

  //   const folder = data.map((item, index) => `data.${index}`);

  const files = ["new files", "new files2"];
  return (
    <div className="col-md-12 w-100">
      {folder.length > 0 && (
        <Showitem title={"created folder"} type={"folder"} items={folder} />
      )}

      {/* <Showitem title={"created folder"} items={folder} /> */}
      <Showitem title={"Created files"} type={"file"} items={files} />
    </div>
  );
}

export default Homecomp;
