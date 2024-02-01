import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function RecentSales({ entryPoint, entryManager }) {
  console.log(entryManager, entryPoint);

  const getLastLetter = (string) => {
    return string.charAt(string.length - 1);
  };
  return (
    <div className="space-y-8">
      <div className="flex flex-col ">
        {entryPoint?.map((entryPoint) => (
          <div className="flex">
            <div className="flex justify-center items-center gap-2">

            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{getLastLetter(entryPoint.name)}</AvatarFallback>
            </Avatar>
              <h2>{ entryPoint.name}</h2>
            </div>
            <div className="ml-auto font-medium">
              10 <span className="font-small">visitors</span>{" "}
            </div>
          </div>
        ))}
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Gate A</p>
          <p className="text-sm text-muted-foreground">
            Entry point manager: {entryManager.first_name}{" "}
            {entryManager.last_name}
          </p>
        </div>
        <div className="ml-auto font-medium">
          10 <span className="font-small">visitors</span>{" "}
        </div>
      </div>
    </div>
  );
}
