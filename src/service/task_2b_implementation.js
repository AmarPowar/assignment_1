const https = require("https");

async function getEmissionsStatisticsByProductName(productName, filters) {
  const apiUrl = `https://api.v2.emissions-api.org/api/v2/${productName}/statistics.json`;

  const queryParams = {};

  if (filters && filters.startDate) {
    queryParams.begin = filters.startDate;
  }
  if (filters && filters.endDate) {
    queryParams.end = filters.endDate;
  }

  let finalUrlToCall ="";

  if(!filters.startDate || !filters.endDate ){
    finalUrlToCall =apiUrl
  }else{
    const urlWithQuery = `${apiUrl}?${new URLSearchParams(queryParams)}`;
    finalUrlToCall = urlWithQuery
  }
  
  

  return new Promise((resolve, reject) => {
    let dataChunks = [];
    const req = https.get(finalUrlToCall, (res) => {
      // Handle data as it arrives

      res.on("data", (chunk) => {
        dataChunks.push(chunk);
      });

      // Handle the end of the stream
      res.on("end", () => {
        console.log("Stream ended");
        const fullData = Buffer.concat(dataChunks);
        const jsonData = fullData.toString();
        const parsedData = JSON.parse(jsonData);
        resolve(parsedData);
      });

      // Handle errors
      res.on("error", (error) => {
        reject("Error while getEmissionsStaticsByProductName api call");
      });
    });
  });

  // try {
  //   const cutsomParams = {};
  //   const result = await http.get(
  //     `https://api.v2.emissions-api.org/api/v2/methane/statistics.json`,{
  //       responseType: 'stream'
  //     }
  //   );

  //     // Handle data as it arrives
  //     result.on('data', (chunk) => {
  //   console.log('Received data chunk:', chunk.toString());
  // });

  // // Handle the end of the stream
  // result.on('end', () => {
  //   console.log('Stream ended');
  // });

  //   return result;
  // } catch (err) {
  //   throw Error('Error while getEmissionsStaticsByProductName api call')
  // }
}

module.exports = {
  getEmissionsStatisticsByProductName,
};
