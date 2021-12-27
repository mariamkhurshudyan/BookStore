import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Home from "./routes/Home";
import Book from "./routes/Book";
import Layout from "./Layout/Layout";
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="book/:id" element={<Book />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
