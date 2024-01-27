import Image from "next/image";
const UserResult = ({ imgSrc, serialNumber, imageQuality }) => {
  return (
    <div className="flex flex-col space-y-2 mt-2 items-start">
      <p className="font-bold">Serial Number : {serialNumber}</p>
      <p className="font-bold">Image Quality : {imageQuality}</p>
    </div>
  );
};

export default UserResult;
