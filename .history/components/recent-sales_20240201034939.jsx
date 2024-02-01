import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function RecentSales({users, entryPoint, entryManager }) {
  console.log(users, entryPoint, entryManager);

  //create an array from entryPoint which has the frequency of how many times the entryPoint has been visited
  //sort the array in descending order

const entryManagersWithCounts = entryManager
  .map((entryManager) => {
    const entryPoint = entryPoints.find(
      (entry) => entry.id === entryManager.entry_point_id
    );
    if (entryPoint) {
      return {
        entry_manager_id: entryManager.id,
        entry_manager_name: `${entryManager.first_name} ${entryManager.last_name}`,
        entry_point_name: entryPoint.name,
        userCounts: {
          [entryPoint.name]: 1, // Start the count at 1 for the current entry manager
        },
      };
    }
    return null;
  })
  .filter(Boolean)
  .reduce((result, entryManager) => {
    const existingEntryManager = result.find(
      (em) => em.entry_point_name === entryManager.entry_point_name
    );
    if (existingEntryManager) {
      existingEntryManager.userCounts[entryManager.entry_point_name]++;
    }
    return result;
  }, []);




  const getLastLetter = (string) => {
    return string.charAt(string.length - 1);
  };
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4 ">
        {entryManagersWithCounts?.map((entryPoint, key) => (
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
              10 <span className="font-small">visitors</span>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
