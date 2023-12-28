import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchFromApi";
import ChannelCard from "./ChannelCard";
import { Box } from "@mui/material";
import Videos from "./Videos";
const Channel = () => {
  const { id } = useParams();
  const [channelsDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=data`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div>
      <Box >
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelsDetails} marginTop="-110px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}  />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default Channel;
