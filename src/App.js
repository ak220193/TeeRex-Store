import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the addition of Routes

import Mainpage from "./Pages/Mainpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* You can add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
