import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function RecentSales({ entryPoint, entryManager }) {
  console.log(entryManager);

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        {entryManager.map((manager) => {
          <div className="overflow-y-scroll" key={manager.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">Gate A</p>
              <p className="text-sm text-muted-foreground">
                Entry point manager: {manager.first_name}{" "}
                {manager.last_name}
              </p>
            </div>
            <div className="ml-auto font-medium">
              10 <span className="font-small">visitors</span>{" "}
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
