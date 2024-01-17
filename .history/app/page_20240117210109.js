import Image from "next/image";

export default function Home() {
  const [response, setResponse] = useState(null);

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
      setResponse(data);
    } catch (error) {
      console.error("Error capturing fingerprint:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <h2>Fingerprint Capture</h2>
      <button onClick={captureFingerprint}>Capture Fingerprint</button>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h4>Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
