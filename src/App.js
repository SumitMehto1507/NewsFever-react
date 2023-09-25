import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import {  Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";




export default function App() {
  const pageSize = 6
  const apikey = process.env.REACT_APP_NEWS_APIKEY
  const [progress, setprogress] = useState(0)


  return (
    <div>
      <Navbar />
      <LoadingBar color='green' height={4} progress={progress} />
      
      
      <Routes basename="/NewsFever-react">
        <Route exact path="/NewsFever-react" element={<News setprogress={setprogress} apikey={apikey} key="home" pageSize={pageSize} country="in" category="" />} />
        <Route exact path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general " pageSize={pageSize} country="in" category="general" />} />
        <Route exact path="/business " element={<News setprogress={setprogress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
        <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
        <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>

    </div>
  )
}


