import { useState } from "react";
import "./App.css";
import Homecomp from "./comp/deshbord/Homecomp";
import Subar from "./comp/deshbord/Subar";
import Createdfolder from "./comp/deshbord/Createdfolder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loadedfile from "./comp/deshbord/Loadedfile";

function App() {
  const [isCreatedfolder, setiscreatdfolder] = useState(false);
  return (
    <>
      {isCreatedfolder && (
        <Createdfolder setiscreatdfolder={setiscreatdfolder} />
      )}
      <Subar setiscreatdfolder={setiscreatdfolder} />

      <Router>
        <Routes>
          <Route path="/" element={<Homecomp />}></Route>
          <Route path="/uploade_file" element={<Loadedfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
