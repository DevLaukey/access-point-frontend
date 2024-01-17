import Image from 'next/image'

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
           }
            

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

      </div>
  )
}
