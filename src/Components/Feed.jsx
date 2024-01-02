import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SiderBar from "./SiderBar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/FetchFromApi";

const Feed = () => {
  const [selectedCateogory, setSelectedCateogory] = useState("New");
  const [videos, setVideos] = useState("");
  console.log(videos , "videosData")
  useEffect(() => {
    fetchFromApi(
      `search?part=snippet&q=${selectedCateogory}`
    )
      .then((data) => {

        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCateogory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 1 },
        }}
      >
        <SiderBar
          selectedCateogory={selectedCateogory}
          setSelectedCateogory={setSelectedCateogory}
        />
        <Typography sx={{ color: "white", mt: 1.5 }}>
          copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={1} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white " }}
        >
          {selectedCateogory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
