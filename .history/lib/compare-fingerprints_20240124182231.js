const compareFingerPrints = async (template1, template2) => {
  const body = JSON.stringify({
    template1,template2
  });
  try {
    const response = await fetch(
      "https://localhost:7030/api/Fingerprint/match",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'cors',
        body:JSON.stringify(body) ,
      }
    );
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default compareFingerPrints;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({

 
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://localhost:7030/api/Fingerprint/match", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));