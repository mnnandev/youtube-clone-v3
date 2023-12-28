import { Box, Stack } from "@mui/material";
import React from "react";
import VidCard from "./VidCard";
import Loader from "./Loader";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log("video", videos);
  if (!Array.isArray(videos)) {
    console.error('The "videos" prop is not an array.');
    return null; // or handle the error appropriately
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VidCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
