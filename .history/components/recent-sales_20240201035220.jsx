import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function RecentSales({users, entryPoint, entryManager }) {
  console.log(users, entryPoint, entryManager);

  //create an array from entryPoint which has the frequency of how many times the entryPoint has been visited
  //sort the array in descending order

const entryManagers = entryManager
  .map((user) => {
    const points = entryPoint.find(
      (entry) => entry.id === user.entry_point_id
    );
    if (points) {
      return {
        entry_manager_id: user.id,
        entry_manager_name: `${user.first_name} ${user.last_name}`,
        entry_point_name: points.name,
      };
    }
    return null;
  })
  .filter(Boolean)



  const getLastLetter = (string) => {
    return string.charAt(string.length - 1);
  };
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4 ">
        {entryManagers?.map((entryPoint, key) => (
          <div className="flex" key={key}>
            <div className="flex justify-center items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>
                  {getLastLetter(entryPoint.entry_point_name)}
                </AvatarFallback>
              </Avatar>
              <h2>{entryPoint.entry_point_name} : </h2>
              <p className="ml-auto font-medium">
                {entryPoint.entry_manager_name}
              </p>
            </div>
            <div className="ml-auto font-medium">
              getNumberOfUsers(entry_point_name)
              <span className="font-small">visitors</span>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
