"use client"
import { useState } from "react";
import { Image } from "next/image";
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
                {/* <tr>
                  <th>Template Base64</th>
                  <td>{data.templateBase64}</td>
                </tr>
                <tr>
                  <th>WSQ Image Size</th>
                  <td>{data.wsqImageSize}</td>
                </tr> */}
                <tr>
                  <th>WSQ Image</th>
                  <td>
                    <p>{data.templateBase64}</p>
                    {data.wsqImage && (
                      <Image
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAGoAsQMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQMCBAUG/9oACAEBAAAAAPA6ejUu7urxy3qnVz5mayT4eHqrHp7tVtKLXfyGOZX3xcnF1Kd+/t6FnE7WhnfnR6Jk+DXMb7+7p6pznq24nm4liVOXG8ZtX3aaa03zShnfnVfnKiHVep276Dgz53dCfPyGFreb43jXr9WqeXyyrPmmCDS28s37HtfKRkNLLQAwG3Tq4cpDEAgY96p003CEEkhCG3tlbzAFzJiEk2PV3JpvJvnyCAGa6MTaGGS0MpiA3Ui2gHlO/OIP/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/2gAKAgIQAxAAAAC+dHTbnrN5q11lTPF44raeiL59dg1ubOt8TR05evz4dVKiubL4YGz08fp7c+3PcrkAMzSqyQAwwqbNJ2NANy4UA3Mmg//EAC0QAAICAgIABAUEAgMAAAAAAAECABEDIRIxBCJBURATIDKRUmFxgRQwM1PB/9oACAEBAAE/AATWxYllarsUQZ8581DiOQ6NQNrzLQ313UtxTdHse4E8NjZbYsGB6IgYWJwLTJgKm4RxOpjN3OJmJQejPlEiPiHIXGCiFh7QEmblQLMvlRiBZE+e/wCkzGVsWtn9+oql1BO6uzVRRxDkWF/J3HyPmYBV0B1MIVuQ3z7BmPkBTdwqbiZGU7MYhxGxKROHGCzqYwyNOZCAiOeRsmBFEYKLMyEDjkHpDkDcBez1LVQoJ9hFcMSADqZwEZ8hep81PY/iIoau7sCNyR+H9x84JFD7UKi4G9tXd1+8xZCiE/cbHXYgziyG8piEWORjYVO1M4kajEwn9or01Q1ehCvJBqMlaqcYcZ4XVn0mYsOeq/Uvcwk6IBLASlUec2QN1F8WEGSY8z5BlLhSoWWv6B+Zicg3wGtzJkGTIaPpUN3AxBvoxGYGx3UTOEVGZQ7e3VATBkHiFsCmHYgLJ3cV1ZY1w3CICRA5quUVtzxLqpWU2YDiTxA3GFufcNUxeXyg16E+tiZlfEeyFaZsSYwh1RHvZMDXpECqPUS2/wC2J/xmxfoJoExR5AdXyj3e/h8xjehueHfhmXZAMGcMB+CLn7gwEn1hUnsEziV0ywKp8tblAEAgQHvymeJpkJ1oaMDOW4a6mZODrvvymIwDZ2cGgQD/AAdzxWLwvylcWLnJDlIWgLsHs6ijGl5LLD1A6E/ycX6G/MDV16T0i8AVPY9YbLDVUItases+4gAAQBz0wsQsQ3KzyBmDxIYKT3RHGC26gcLo6PsYpVhqEIfKdWdTPnyY8qpegaIEzeITRQE+566md35gjkmtD3BnO0xuDspWhMzMb810UblHcJlz0RRCGP4rnj48QPNYEZiTdwMxDb7m/hy3c4EkiKe50BQsV6wX8y6Gt7i5WEc8jfvuY3o0epgzpkVRdOb1AX6NMPYmcHBtAf63+RBlxMeD3yI2J4tgrclN/duDxAcUzewE8TrM2zdxfEmsQPoK3uZnbahrUVCxayez9ZYn4KxE5bJl/C5jco1jsGxPAeKGRuGXZJ1G+Xixs5ulFzL4hnzM4JFzJkZ7JPZgMZixJMJ1OR956fAfRcs/RcuCUb1cTHkY0u5k8PmVL5cvcSjCT/vowYyZwUdmDfSiDEqbybPosGQiDMwjfLY+Zf7HcyYmTYNqejP6EoTiJR9pUr4H6ALgWVLA6+CY2YhQLJ6Udy0w6Qhn9x0v8S/Uy9wtCYuQrY7B7BmTGpHNNr6+6/zCCJcuXL+nUuX8ALMxIXsghVH3OehGzKFKYgQp7J7f+YDOUuXA2oTEyMhsGFVyAtjFH1T/ANX4X9Fy/o2J/MTGAoyZiVT0UdtMmZslCgFX7VHQly5cuXAYTLgYggg0RNZ/YZPwGhsaI2P9InhgGz4gRYLzxBJz5bJPmP8Asz7x+HJ7KbPwP0f/xAAiEQACAgIBAwUAAAAAAAAAAAAAAQIREiAhAzFREBMwQWH/2gAIAQIBAT8AiZC82X4ZmOaaMm/sy/TNLshSszpWe7LyziixMY2ZFl+qZes+ByaE2+xBSaFyUyjFatWiWUZtUQ6LVMUKfAo1vYrZixpov4FHRx3S4vZq1p//xAAkEQEAAgICAQMFAQAAAAAAAAABAAIRIQMgMRBBURITMDJSYf/aAAgBAwEBPwBhWBnUeNzshSVqjHX6kB+CYfK+ltk+iv8ARN59BhCBLDqFnOJWzuZ1G9hmXpW7WVSxFT21BbRSvmLgzG4Dl+YcpvU+/bpmcfI0Y8ppDzHlrXOI8q1w+Y8imJnPfJBMe/4s9M912H+ZmMdfCHT/2Q=="
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
