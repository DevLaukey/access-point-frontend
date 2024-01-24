const compareFingerPrints = async (template1, template2) => {
  const body = {
    template1,
    template2,
  };
  try {
    const response = await fetch(
      "https://localhost:7030/api/Fingerprint/match",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          template1,
          template2,
        },
      }
    );
    console.log(response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default compareFingerPrints;
