import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [data, setData] = useState(null);

  const captureFingerprint = async () => {
    try {
      const response = await fetch(
        "https://localhost:7030/api/Fingerprint/capture",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("Response:", data);
      setData(data);
    } catch (error) {
      console.error("Error capturing fingerprint:", error);
    }
  };

  function displayWSQImage(wsqData) {
    console.log(wsqData.trim(6));
    // Decode the base64-encoded WSQ data
    const binaryData = atob(wsqData);
    const byteArray = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      byteArray[i] = binaryData.charCodeAt(i);
    }

    // Create a Blob from the byte array
    const blob = new Blob([byteArray], { type: "image/wsq" });

    // Create a data URL from the Blob
    const imageUrl = URL.createObjectURL(blob);

    console.log("Image URL:", imageUrl);
    return imageUrl;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Fingerprint Capture</h2>
      <button onClick={captureFingerprint}>Capture Fingerprint</button>

      {data && (
        <div style={{ marginTop: "20px" }}>
          <div>
            <h2>Image Details</h2>
            <table>
              <tbody>
                <tr>
                  <th>Serial Number</th>
                  <td>{data.serialNumber}</td>
                </tr>
                <tr>
                  <th>Image Height</th>
                  <td>{data.imageHeight}</td>
                </tr>
                <tr>
                  <th>Image Width</th>
                  <td>{data.imageWidth}</td>
                </tr>
                <tr>
                  <th>Image DPI</th>
                  <td>{data.imageDPI}</td>
                </tr>
                <tr>
                  <th>Image Quality</th>
                  <td>{data.imageQuality}</td>
                </tr>
                <tr>
                  <th>NFIQ</th>
                  <td>{data.nfiq}</td>
                </tr>

                <tr>
                  <th>WSQ Image Size</th>
                  <td>{data.wsqImageSize}</td>
                </tr>
                <tr>
                  <th>WSQ Image</th>
                  <td>
                    {data.bmpBase64 && (
                      <Image
                        src={`data:image/bmp;base64,${data.bmpBase64}`}
                        alt="WSQ Image"
                        height="300"
                        width="300"
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
