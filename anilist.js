const axios = require('axios');

async function fetchWatchHistory(userId) {
  try {
    // Make a GET request to the Anilist API to fetch the watch history
    const response = await axios.get(`https://api.anilist.co/v2/user/${userId}/history/anime`);
    const watchHistory = response.data;

    return watchHistory;
  } catch (error) {
    // If the request fails or the response has a non-200 status code,
    // throw an error with a message describing the failure
    throw new Error(`Failed to fetch watch history: ${error.message}`);
  }
}

// Example usage: fetch the watch history for user with ID 12345
fetchWatchHistory(12345).then((watchHistory) => {
  console.log(watchHistory);
}).catch((error) => {
  console.error(error.message);
});
