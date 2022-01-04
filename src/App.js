import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Home from "./routes/Home";
import Book from "./routes/Book";
import Layout from "./Layout/Layout";
import NotFound from "./routes/NotFound";
import Books from "./Components/Books/Books";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} >
              <Route path="" element={<Books/>} />
              <Route path="picks" element={<Book />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
