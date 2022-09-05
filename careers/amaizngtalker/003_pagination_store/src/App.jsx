import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams, useNavigate } from "react-router-dom";
import * as apiClient from "./utils/api";
import * as helper from "./utils/helper";
import { anchorTeacherPrefix } from "./utils/constant";
import { Teacher } from "./pages/teacher";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page" element={<Teacher />} />
        <Route path="/" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
