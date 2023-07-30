import React from 'react'
import Problem from './screens/problem';
import Home from './screens/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <title>Cursed Python</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:id" element={<Problem />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
