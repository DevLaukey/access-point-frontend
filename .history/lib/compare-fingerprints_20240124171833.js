const compareFingerPrints = async(
  firstFingerprintCaptured,
  secondFingerprintCaptured
) => {
    try {
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                firstFingerprintCaptured,secondFingerprintCaptured
            }
        })
        console.log(response);

        return response;

    } catch (error) {
        console.log(error)
    }
};

export default compareFingerPrints