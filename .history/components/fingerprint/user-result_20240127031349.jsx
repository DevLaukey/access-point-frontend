import Image from "next/image";
const UserResult = ({
  first_name,
  last_name,
  arrival_time,
  departure_time,
}) => {
  return (
    <div className="flex flex-col space-y-2 my-2 items-start">
      <div className="flex justify-center items-center space-x-2">


      <p className="font-bold">First Name : {first_name}</p>
      <p className="font-bold">Last Name : {last_name}</p>
      </div>
      <p className="font-bold">Arrival Time : {arrival_time}</p>
      {departure_time && (
        <p className="font-bold">Departure Time : {departure_time}</p>
      )}
    </div>
  );
};

export default UserResult;
