const compareFingerPrints = async (template1, template2) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    template1,
    template2,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  };

  try {
    
    const response = fetch("https://localhost:7030/api/Fingerprint/match", requestOptions)

    const result = response.text()  
    
     return result
  } catch (error) {
    console.log(error)
  }
};

export default compareFingerPrints;
