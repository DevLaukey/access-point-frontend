import Image from "next/image";
const UserResult = ({
  first_name,
  last_name,
  arrival_time,
  departure_time,
}) => {
  return (
    <div className="flex flex-col space-y-2 mt-2 items-start">
      <p className="font-bold">First Name : {serialNumber}</p>
      <p className="font-bold">Last Name : {imageQuality}</p>
      <p className="font-bold">Arrival Time : {imageQuality}</p>
      {departure_time && (
        <p className="font-bold">Departure Time : {imageQuality}</p>
      )}
    </div>
  );
};

export default UserResult;
