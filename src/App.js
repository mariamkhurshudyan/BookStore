import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Home from "./routes/Home";
import Layout from "./Layout/Layout";
import NotFound from "./routes/NotFound";
import Planets from "./Components/Planets/Planets";
import Picks from "./Components/Picks/Picks";
import Analytics from "./Components/Analytics/Analytics";
import Planet from "./routes/Planet";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="" element={<Planets/>} />
              <Route path="stats" element={<Analytics className1='secondary'/>} />
              <Route path="picks" element={<Picks/>} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="planet/:id" element={<Planet />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
