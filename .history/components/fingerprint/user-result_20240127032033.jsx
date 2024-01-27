import Image from "next/image";
const UserResult = ({
  first_name,
  last_name,
  arrival_time,
  departure_time,
}) => {
  function convertDate(timestamp) {
    const dateObj = new Date(timestamp);

    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = dateObj.getFullYear();

    const hours = dateObj.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const ampm = dateObj.getHours() >= 12 ? "PM" : "AM";

    const formattedDate = `${day}${month}${year}`;
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return { date: formattedDate, time: formattedTime };
  }

  return (
    <div className="flex flex-col space-y-2 my-2 items-start">
      <div className="flex justify-center items-center space-x-4">
        <p className="font-bold">First Name: {first_name}</p>
        <p className="font-bold">Last Name: {last_name}</p>
      </div>
      <p className="font-bold">Arrival Time: {convertDate(arrival_time).date} <span className="text-sm ml-1">{ convertDate(arrival_time).time}</span></p>
      {departure_time && (
        <p className="font-bold">
          Departure Time: {convertDate(departure_time)}
        </p>
      )}
    </div>
  );
};

export default UserResult;
