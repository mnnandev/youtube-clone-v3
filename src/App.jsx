import { Box } from "@mui/material";
import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Feed, SearchFeed, VideoDetail, Channel, Navbar } from "./Components";
import Feed from './Components/Feed'
import VideoDetail from "./Components/VideoDetail"
import Channel from "./Components/Channel"
import SearchFeed from "./Components/SearchFeed"
import Navbar from "./Components/Navbar";
const App = () => (
  <BrowserRouter>
    <Box sx ={{backgroundColor:"#000"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
