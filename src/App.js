import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Home from "./routes/Home";
import Layout from "./Layout/Layout";
import NotFound from "./routes/NotFound";
import Books from "./Components/Books/Books";
import Picks from "./Components/Picks/Picks";
import Analytics from "./Components/Analytics/Analytics";
import Book from "./routes/Book";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="" element={<Books/>} />
              <Route path="stats" element={<Analytics className1='secondary'/>} />
              <Route path="picks" element={<Picks/>} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="book/:id" element={<Book />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
