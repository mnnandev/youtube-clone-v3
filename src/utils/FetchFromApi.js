import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com' 

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    // regionCode: 'US',
    // channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
    part: 'snippet,id',
    order: 'date',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '34183e4230mshae51378cf36a1d4p1389d0jsnb35b0ca138c9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

 
 
export const fetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log('response ', response)
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


 
