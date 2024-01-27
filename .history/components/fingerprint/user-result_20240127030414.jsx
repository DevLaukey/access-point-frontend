import Image from "next/image";
const UserResult = ({
  first_name,
  last_name,
  arrival_time,
  departure_time,
}) => {
  return (
    <div className="flex flex-col space-y-2 mt-2 items-start">
      <p className="font-bold">First Name : {first_name}</p>
      <p className="font-bold">Last Name : {last_name}</p>
      <p className="font-bold">Arrival Time : {arrival_time}</p>
      {departure_time && (
        <p className="font-bold">Departure Time : {departure_time}</p>
      )}
    </div>
  );
};

export default UserResult;