import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../utils/Constant";

const SiderBar = ({ selectedCateogory, setSelectedCateogory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto",md:'100%' },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          onClick={() => setSelectedCateogory(category.name)}
          style={{
            background: category.name === selectedCateogory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCateogory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCateogory ? "1" : "0.7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SiderBar;
