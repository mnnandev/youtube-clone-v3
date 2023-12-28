import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handlSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handlSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid  #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="search...."
        style={{ border: "none", outline: "none" }}
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton sx={{ p: "10px", color: "red" }} type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
